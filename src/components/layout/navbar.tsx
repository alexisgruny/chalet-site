"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/routes";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Si on scroll vers le bas → cacher
      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      }
      // Si on scroll vers le haut → montrer
      else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Si la souris est proche du haut → montrer
      if (e.clientY < 60) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#EBE2D6] border-b border-black/10 transition-transform duration-300 shadow-md
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-[#3a4b3c]"> Chalet Jaïa</Link>
        <button
          className="md:hidden text-[#3a4b3c] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span className="text-2xl leading-none" aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#3a4b3c]/70 hover:text-[#3a4b3c] transition"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary px-4 py-2 !rounded">
            Réserver
          </Link>
        </nav>

        {/* Backdrop mobile */}
        {open && (
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden absolute top-full left-0 bg-[#3a4b3c] w-full border-t border-white/10 shadow-lg z-50">
            <nav className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg font-medium py-3 border-b border-white/10 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-secondary flex items-center justify-center w-full"
                >
                  Réserver
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}