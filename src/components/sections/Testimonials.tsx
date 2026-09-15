"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Apa Kata Mereka?"
          subtitle="Testimoni dari siswa dan orang tua yang puas dengan layanan kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-6 border border-cyan-100/60"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy-600 text-sm leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-navy-900 text-sm">{t.name}</p>
                <p className="text-xs text-navy-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
