"use client";

import { useEffect, useRef } from 'react';
import Desmos from 'desmos';

const GraphingCalculator = ( { onGraphImageAdded, onClose } ) => {
  const calculatorRef = useRef( null );
  const calcInstanceRef = useRef( null );

  useEffect( () => {
    const elt = calculatorRef.current;
    const calculator = Desmos.GraphingCalculator( elt, { expressions: true } );
    calcInstanceRef.current = calculator;

    return () => {
      calculator.destroy();
    };
  }, [] );

  const handleAddGraphToCanvas = () => {
    if ( calcInstanceRef.current ) {
      const calculator = calcInstanceRef.current;

      const thumbnail = calculator.screenshot( {
        width: 600,
        height: 400,
        targetPixelRatio: 2
      } );

      if ( thumbnail ) {
        onGraphImageAdded( thumbnail );
        onClose();
      } else {
        console.error( "Failed to generate the graph image." );
      }
    } else {
      console.error( "calcInstanceRef.current is not available." );
    }
  };

  return (
    <div className="graphing-calculator-modal fixed z-10 top-16 left-1/2 -translate-x-1/2 bg-white p-4 shadow-lg">
      <div ref={ calculatorRef } className='w-[600px] h-[400px]' />
      <div className="mt-4 flex justify-end">
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={ handleAddGraphToCanvas }>
          Add to Canvas
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={ onClose }>
          Close
        </button>
      </div>
    </div>
  );
};

export default GraphingCalculator;
