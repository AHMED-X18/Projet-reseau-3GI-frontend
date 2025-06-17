import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuration des polices Google avec next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOWYOB API Center",
  description: "The API Center for YOWYOB",
  // Les balises meta et link se configurent désormais via le Metadata type
  metadataBase: new URL("https://yourdomain.com"), // À remplacer par votre URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Configuration des polaces externes (Font Awesome) */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="antialiased min-h-screen flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}