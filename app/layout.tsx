import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asaf Zaltsman — Video Portfolio",
  description: "Selected reels and video work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${manrope.variable} h-full scroll-smooth`}>
      <body
        className="custom-scrollbar min-h-full overflow-x-hidden bg-surface font-body text-on-surface antialiased selection:bg-primary selection:text-on-primary"
      >
        {children}
      </body>
    </html>
  );
}
