import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitter - A fast and simple motion design tool on the web",
  description: "Jitter - A fast and simple motion design tool on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png"/>
        <link rel="preload" href="/fonts/lausanne/TWKLausanne-800.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/lausanne/TWKLausanne-600.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>

    <body className="antialiased">{children}</body>
    </html>
  );
}
