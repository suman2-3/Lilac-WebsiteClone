import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Lilac Clone",
  description: "Next + Tailwind build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
