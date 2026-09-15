import Link from "next/link";
import { Camera } from "lucide-react";
import { trainers } from "@/data/trainers";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Kenali Instruktur Kami"
          subtitle="Instruktur berpengalaman yang siap membantu kamu belajar renang dengan cara yang benar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="text-center">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                <span className="text-2xl font-bold text-white">
                  {trainer.initials}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                {trainer.name}
              </h3>

              {/* Instagram */}
              <Link
                href={trainer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cyan-500 hover:text-cyan-600 transition-colors mb-4"
              >
                <Camera className="w-4 h-4" />
                {trainer.instagramHandle}
              </Link>

              {/* Bio */}
              <p className="text-sm text-navy-500 leading-relaxed mb-4">
                {trainer.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2">
                {trainer.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
