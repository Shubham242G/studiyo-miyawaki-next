import type { Metadata } from "next";
import { Geist, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/sidebar";
import WhatsappFloat from "./components/whatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Miyawaki",
  description: "Premium web services studio for modern brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} ${geistMono.variable} text-slate-900 font-sans`}
      >
        <Sidebar />

        <div className="min-h-screen lg:pl-[20%] ">
          {children}
        </div>

        {/* FLOATING WHATSAPP */}
        <WhatsappFloat />
      </body>
    </html>
  );
}
