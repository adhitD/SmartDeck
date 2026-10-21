import { useState } from "react";
import Brand from "./Brand";
import { nomorwa } from "../App.jsx";

const nav = [
  ["Beranda", "#home"],
  ["Layanan", "#layanan"],
  ["Tentang", "#tentang"],
  ["Kontak", "#kontak"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-blue-50 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Brand />

        <button
          type="button"
          className="rounded-xl p-2 text-2xl text-[#024C99] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${
            menuOpen
              ? "absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-blue-100 bg-white p-5 shadow-lg"
              : "hidden"
          } md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#024C99]"
            >
              {label}
            </a>
          ))}

          <a
            href={`https://wa.me/${nomorwa}?text=Halo%20SmartDeck%2C%20saya%20ingin%20konsultasi%20gratis.`}
            onClick={closeMenu}
            className="ml-1 rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-3 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5"
          >
            Konsultasi gratis ↗
          </a>
        </div>
      </nav>
    </header>
  );
}