import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jitter - A fast and simple motion design tool on the web",
  description: "Jitter - A fast and simple motion design tool on the web",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/lausanne/TWKLausanne-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/lausanne/TWKLausanne-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
