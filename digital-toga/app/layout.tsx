"use client"; // Diperlukan untuk mengelola buka/tutup menu di HP

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <html lang="id">
      <body className="antialiased">
        {/* Navbar Global */}
        <nav className="bg-[#386642] sticky top-0 z-50 shadow-md">
          <div className="flex justify-between items-center py-4 px-4 md:py-5 md:px-25">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/uhumhxt7_expires_30_days.png" 
                className="w-8 h-8 md:w-10 md:h-10" 
                alt="Logo" 
              />
              <span className="text-white text-lg md:text-2xl font-bold whitespace-nowrap">Purwodadi TogaPedia</span>
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8 text-white text-sm">
              <Link href="/" className="hover:opacity-80">Beranda</Link>
              <Link href="/#koleksi" className="hover:opacity-80">Koleksi</Link>
              <Link href="/#lokasi" className="hover:opacity-80">Lokasi</Link>
            </div>

            {/* Tombol Titik Tiga / Hamburger (Hanya tampil di HP) */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h.01M12 6h.01M12 18h.01M12 12a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zm0 12a1 1 0 110-2 1 1 0 010 2z" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Dropdown Mobile */}
          {isOpen && (
            <div className="md:hidden bg-[#2D5235] border-t border-[#4A7A56] flex flex-col p-4 space-y-4 shadow-inner">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-white text-sm font-medium hover:bg-[#386642] p-2 rounded transition"
              >
                Beranda
              </Link>
              <Link 
                href="/#koleksi" 
                onClick={() => setIsOpen(false)}
                className="text-white text-sm font-medium hover:bg-[#386642] p-2 rounded transition"
              >
                Koleksi
              </Link>
              <Link 
                href="/#lokasi" 
                onClick={() => setIsOpen(false)}
                className="text-white text-sm font-medium hover:bg-[#386642] p-2 rounded transition"
              >
                Lokasi
              </Link>
            </div>
          )}
        </nav>

        {children}

        {/* Footer Global */}
        <footer className="bg-[#2F251C] py-8 text-center text-white">
          <p className="text-lg font-bold">About TogaPedia • Contact Us</p>
          <p className="text-sm opacity-70 mt-2">© 2025 KKN T - Purwodadi</p>
        </footer>
      </body>
    </html>
  );
}