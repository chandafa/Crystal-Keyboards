import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystal - Custom Mechanical Keyboards",
  description: "Experience the ultimate typing feel. Crafted for enthusiasts.",
  authors: [{ name: "Candra Kirana", url: "https://github.com/chandafa" }],
  creator: "Candra Kirana",
  keywords: ["mechanical keyboard", "custom keyboard", "crystal", "typing", "tech", "web design", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-[#050510] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
