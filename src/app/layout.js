import "./globals.css";

export const metadata = {
  title: 'Rayraph: Digital Whiteboard',
  description: 'Digital Whiteboard.',
  // openGraph: {
  //   images: [ "https://viosell.vercel.app/Images/favicon.svg" ]
  // }
  // icons: {
  //   icon: "favicon.ico"
  // }
};

export default function RootLayout ( { children } ) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <main className="w-full h-full">
          { children }
        </main>
      </body>
    </html>
  );
}
