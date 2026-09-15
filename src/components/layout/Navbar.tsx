"use client";

import Link from "next/link";
import { useState } from "react";
import { Waves, Menu, X, MessageCircle } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/constants";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Trainer", href: "#trainers" },
  { label: "Galeri", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2">
            <Waves className="w-7 h-7 text-cyan-500" />
            <span className="text-xl font-bold text-navy-900">{SITE.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-600 hover:text-cyan-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cyan-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-cyan-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-navy-600 hover:bg-cyan-50 hover:text-cyan-500 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-cyan-500 text-white px-5 py-3 rounded-xl text-sm font-semibold mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Daftar via WhatsApp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
