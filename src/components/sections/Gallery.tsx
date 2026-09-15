import Link from "next/link";
import { Camera, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryItems = [
  { gradient: "from-cyan-400 to-blue-500" },
  { gradient: "from-cyan-300 to-cyan-600" },
  { gradient: "from-blue-400 to-cyan-500" },
  { gradient: "from-cyan-500 to-teal-400" },
  { gradient: "from-teal-400 to-cyan-500" },
  { gradient: "from-cyan-400 to-blue-400" },
  { gradient: "from-blue-300 to-cyan-600" },
  { gradient: "from-cyan-500 to-blue-500" },
  { gradient: "from-cyan-300 to-teal-500" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-white to-cyan-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galeri Kegiatan"
          subtitle="Momen-momen seru selama latihan renang bersama Cyan Splash"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white/70 text-xs font-medium hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              Foto {i + 1}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Camera className="w-5 h-5" />
            Lihat di Instagram
          </Link>
          <Link
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-800 transition-colors shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Lihat di TikTok
          </Link>
        </div>
      </div>
    </section>
  );
}
