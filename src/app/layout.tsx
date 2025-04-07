import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`flex flex-col h-screen w-screen overflow-x-hidden bg-black `}>
        {children}
      </body>
    </html>
  );
}
