export interface Program {
  id: string;
  name: string;
  iconName: string;
  description: string;
  duration: string;
  forWho: string;
  highlights: string[];
  waMessage: string;
}

export const programs: Program[] = [
  {
    id: "private-single",
    name: "Private 1-on-1",
    iconName: "User",
    description:
      "Sesuai latihan intensif langsung dengan instruktur. Fokus total pada teknik dan perkembanganmu.",
    duration: "60 menit/sesi",
    forWho: "Anak & Dewasa",
    highlights: ["Fokus personal", "Jadwal fleksibel", "Progres cepat"],
    waMessage:
      "Halo Cyan Splash, saya tertarik paket Private 1-on-1!",
  },
  {
    id: "private-group",
    name: "Private Group",
    iconName: "Users",
    description:
      "Latihan seru bareng teman atau keluarga. Harga lebih hemat per orang!",
    duration: "60 menit/sesi",
    forWho: "2-4 Orang",
    highlights: ["Hemat harga", "Latihan seru", "Cocok untuk keluarga"],
    waMessage:
      "Halo Cyan Splash, saya tertarik paket Private Group!",
  },
  {
    id: "kids-program",
    name: "Kids Program",
    iconName: "Baby",
    description:
      "Program khusus anak-anak dengan pendekatan yang fun dan aman. Belajar renang sambil bermain!",
    duration: "45 menit/sesi",
    forWho: "Anak 4-12 Tahun",
    highlights: ["Pendekatan fun", "Aman & terjamin", "Instruktur ramah anak"],
    waMessage:
      "Halo Cyan Splash, saya tertarik paket Kids Program untuk anak saya!",
  },
  {
    id: "adult-program",
    name: "Adult Program",
    iconName: "PersonStanding",
    description:
      "Belajar renang dari nol atau tingkatkan teknikmu. Cocok untuk pemula hingga mahir.",
    duration: "60 menit/sesi",
    forWho: "Dewasa 17+ Tahun",
    highlights: ["Pemula friendly", "Teknik benar", "Bebas tekanan"],
    waMessage:
      "Halo Cyan Splash, saya tertarik paket Adult Program!",
  },
];
