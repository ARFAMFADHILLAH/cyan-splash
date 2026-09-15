import Link from "next/link";
import { MessageCircle, Waves } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-cyan-500 to-cyan-600 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Waves className="absolute -top-10 -left-10 w-40 h-40 text-white" />
        <Waves className="absolute -bottom-10 -right-10 w-56 h-56 text-white rotate-180" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Siap Belajar Renang?
        </h2>
        <p className="text-lg text-cyan-100 mb-8 max-w-xl mx-auto">
          Jangan tunda lagi! Hubungi kami sekarang untuk konsultasi gratis dan
          jadwalkan sesi pertamamu.
        </p>
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-cyan-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          Hubungi via WhatsApp
        </Link>
      </div>
    </section>
  );
}
