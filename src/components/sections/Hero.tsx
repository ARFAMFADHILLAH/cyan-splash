import Link from "next/link";
import { MessageCircle, Waves } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-cyan-100"
    >
      {/* Decorative wave background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full text-cyan-500/10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full text-cyan-500/5"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating bubbles decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-300/20 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-400/15 rounded-full animate-bounce [animation-delay:0.5s]" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-500/20 rounded-full animate-bounce [animation-delay:1s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Waves className="w-4 h-4" />
            {SITE.address}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 leading-tight mb-6">
            Kelas Renang Privat{" "}
            <span className="text-cyan-500">Rawamangun</span>{" "}
            & Jakarta Timur
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-navy-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Belajar renang dengan instruktur bersertifikat. Privat, fleksibel,
            dan menyenangkan untuk semua usia — dari anak-anak hingga dewasa.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-cyan-600 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Daftar via WhatsApp
            </Link>
            <Link
              href="#programs"
              className="flex items-center gap-2 text-navy-600 font-semibold hover:text-cyan-500 transition-colors"
            >
              Lihat Program &darr;
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { number: "100+", label: "Siswa Puas" },
              { number: "4+", label: "Program Les" },
              { number: "100%", label: "Privat & Personal" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-500">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-navy-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
