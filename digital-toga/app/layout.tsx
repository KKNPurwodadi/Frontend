import './globals.css'; // Pastikan Tailwind diimport
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar Global */}
  <nav className="flex justify-between items-center bg-[#386642] py-5 px-6 md:px-25 sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/uhumhxt7_expires_30_days.png" className="w-10 h-10" alt="Logo" />
            <span className="text-white text-2xl font-bold">Purwodadi TogaPedia</span>
          </Link>
          <div className="hidden md:flex gap-8 text-white text-sm">
            <Link href="/" className="hover:opacity-80">Beranda</Link>
            <Link href="/#koleksi" className="hover:opacity-80">Koleksi</Link>
            <Link href="/#lokasi" className="hover:opacity-80">Lokasi</Link>
          </div>
        </nav>

        {children}

        {/* Footer Global */}
        <footer className="bg-[#2F251C] py-8 text-center text-white">
          <p className="text-lg">About TogaPedia • Contact Us</p>
          <p className="text-sm opacity-70">© 2025 KKN T - Purwodadi</p>
        </footer>
      </body>
    </html>
  );
}