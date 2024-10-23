import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autodesk | 3D Design, Engineering & Construction Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/icon-3.png' type="image/png" sizes="10x10 10x10" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
