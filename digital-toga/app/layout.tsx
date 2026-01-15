import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import font
import "./globals.css";

// 2. Konfigurasi font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Masukkan ketebalan yang dipakai
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TogaPedia",
  description: "Oase Kesehatan di Tengah Purwodadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Terapkan variabel font di body */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}