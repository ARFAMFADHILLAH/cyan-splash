import Link from "next/link";
import { Waves, Camera, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="#hero" className="flex items-center gap-2 mb-4">
              <Waves className="w-7 h-7 text-cyan-400" />
              <span className="text-xl font-bold">{SITE.name}</span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed">
              Kelas renang privat untuk anak & dewasa di Rawamangun, Jakarta
              Timur. Belajar renang dengan instruktur bersertifikat dan
              metode yang menyenangkan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "#hero" },
                { label: "Tentang Kami", href: "#about" },
                { label: "Program", href: "#programs" },
                { label: "Trainer", href: "#trainers" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                {SITE.address}
              </li>
              <li>
                <Link
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy-300 hover:text-cyan-400 transition-colors"
                >
                  <Camera className="w-4 h-4 text-cyan-400" />
                  @cyansplash.swimming
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${SITE.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  WhatsApp Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-navy-700 text-center text-sm text-navy-400">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
