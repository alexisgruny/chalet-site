"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/routes";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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
        beige border-b transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-green-900">
          Chalet JAIA
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-green-900"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="green text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Réserver
          </Link>
        </nav>
      </div>
    </header>
  );
}