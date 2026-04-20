import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar and Footer are removed from here */}
        {children}
      </body>
    </html>
  );
}