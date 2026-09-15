import { User, Users, Baby, PersonStanding, Check, MessageCircle } from "lucide-react";
import Link from "next/link";
import { programs } from "@/data/programs";
import { getWhatsAppUrl } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Users,
  Baby,
  PersonStanding,
};

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-gradient-to-b from-cyan-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pilih Program Les Renang"
          subtitle="Kami menyediakan berbagai paket yang bisa disesuaikan dengan kebutuhan dan usia"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => {
            const Icon = iconMap[program.iconName];
            return (
              <Card key={program.id} className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-7 h-7 text-cyan-500" />}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  {program.name}
                </h3>

                {/* For who */}
                <p className="text-xs font-medium text-cyan-600 bg-cyan-50 inline-block px-3 py-1 rounded-full mb-3 w-fit">
                  {program.forWho}
                </p>

                {/* Description */}
                <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">
                  {program.description}
                </p>

                {/* Duration */}
                <p className="text-xs text-navy-400 mb-3">
                  Durasi: <span className="font-semibold text-navy-600">{program.duration}</span>
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-navy-600">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={getWhatsAppUrl(program.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-cyan-500 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-cyan-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pilih Paket
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
