import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        <div className="header">aa</div>
        <body>{children}</body>
      </>
    </html>
  );
}
