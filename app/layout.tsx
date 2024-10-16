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
      <body>
        {children}
      </body>
    </html>
  );
}
