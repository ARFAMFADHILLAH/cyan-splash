import { MapPin, Clock, ShieldCheck, Heart } from "lucide-react";
import { SITE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: ShieldCheck,
    title: "Instruktur Bersertifikat",
    desc: "Coach profesional dengan sertifikasi resmi",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    desc: "Pilih waktu yang paling cocok untukmu",
  },
  {
    icon: Heart,
    title: "Metode Menyenangkan",
    desc: "Belajar sambil bermain, tanpa tekanan",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    desc: "Kolam bersih & nyaman di Rawamangun",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tentang Cyan Splash"
          subtitle="Membantu Anda dan keluarga belajar renang dengan cara yang aman, nyaman, dan menyenangkan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-navy-600 leading-relaxed mb-6">
              <strong className="text-navy-900">Cyan Splash</strong> adalah
              layanan les renang privat yang berlokasi di Kolam Renang Bojana
              Tirta, Rawamangun, Jakarta Timur. Kami hadir untuk membantu Anda
              dan keluarga belajar renang dengan percaya diri.
            </p>
            <p className="text-navy-600 leading-relaxed mb-8">
              Dengan instruktur bersertifikat dan metode pengajaran yang
              terbukti efektif, kami melayani peserta dari semua usia — mulai
              dari anak-anak 4 tahun hingga dewasa. Setiap sesi dirancang
              untuk memberikan pengalaman belajar yang personal dan menyenangkan.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cyan-50/50"
                >
                  <feature.icon className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-navy-500 text-xs mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="space-y-4">
            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <h3 className="font-bold text-navy-900">Lokasi Latihan</h3>
              </div>
              <p className="text-sm text-navy-600 mb-4">{SITE.address}</p>
              <div className="w-full h-48 bg-cyan-200/30 rounded-xl flex items-center justify-center text-navy-400 text-sm border border-cyan-200/50">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p>Google Maps Embed</p>
                  <p className="text-xs text-navy-300 mt-1">
                    Ganti URL di constants.ts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
