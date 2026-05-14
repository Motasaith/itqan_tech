import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITQAN TECH - Academic & Digital Solutions",
  description: "Smart Solutions Powered by Tech! Professional writing and digital services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-accent selection:text-ink relative">
        {children}
      </body>
    </html>
  );
}
