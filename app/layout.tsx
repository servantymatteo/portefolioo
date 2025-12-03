import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CrispChat from "../components/CrispChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matteo Servanty — Ingénieur Réseaux & Développeur",
  description: "Portfolio de Matteo Servanty, ingénieur réseaux et développeur passionné",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <CrispChat />
      </body>
    </html>
  );
}