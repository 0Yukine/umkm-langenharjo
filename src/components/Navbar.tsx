import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF8EE] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-bold text-[#8B4513]">
              UMKM Langenharjo
            </h1>

            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Portal UMKM Desa
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-[#A66A3F] transition"
            >
              Beranda
            </Link>

            <Link
              to="/won-dimsum"
              className="hover:text-[#A66A3F] transition"
            >
              Won Dimsum
            </Link>

            <Link
              to="/seblak-semar"
              className="hover:text-[#A66A3F] transition"
            >
              Seblak Semar
            </Link>

            <Link
              to="/syifa-eco"
              className="hover:text-[#A66A3F] transition"
            >
              Syifa Eco
            </Link>

          </div>

          {/* Tombol Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-6 pb-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>

            <Link
              to="/won-dimsum"
              onClick={() => setIsOpen(false)}
            >
              Won Dimsum
            </Link>

            <Link
              to="/seblak-semar"
              onClick={() => setIsOpen(false)}
            >
              Seblak Semar
            </Link>

            <Link
              to="/syifa-eco"
              onClick={() => setIsOpen(false)}
            >
              Syifa Eco
            </Link>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-[#8B4513] text-white text-center py-3 rounded-xl mt-2"
            >
              Hubungi Kami
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}