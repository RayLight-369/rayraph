"use client";

import { Button, Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";

// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper = ( { openDesmos, setApi } ) => {
  console.info( convertToExcalidrawElements( [ {
    type: "rectangle",
    id: "rect-1",
    width: 186.47265625,
    height: 141.9765625,
  }, ] ) );
  return (
    <div className="h-full w-full">
      <Excalidraw
        renderTopRightUI={ () => {
          return (
            <button className="w-max bg-slate-500 hover:bg-slate-600 text-sm text-white px-4 rounded" onClick={ openDesmos }>Desmos</button>
          );
        } }
        excalidrawAPI={ ( api ) => setApi( api ) } />
    </div>
  );
};

export default ExcalidrawWrapper;