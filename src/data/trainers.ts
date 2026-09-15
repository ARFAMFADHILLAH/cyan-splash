export interface Trainer {
  id: string;
  name: string;
  instagram: string;
  instagramHandle: string;
  bio: string;
  specialties: string[];
  initials: string;
}

export const trainers: Trainer[] = [
  {
    id: "aliif",
    name: "Aliif H.R.",
    instagram: "https://instagram.com/aliifhr_",
    instagramHandle: "@aliifhr_",
    bio: "Instruktur renang bersertifikat dengan pengalaman mengajar anak & dewasa. Terkenal sabar dan metode belajarnya menyenangkan.",
    specialties: ["Teknik Gaya Bebas", "Teknik Gaya Dada", "Anak-anak"],
    initials: "AH",
  },
  {
    id: "ananda",
    name: "Ananda Farikha",
    instagram: "https://instagram.com/anandafarikha",
    instagramHandle: "@anandafarikha",
    bio: "Instruktur renang profesional yang berfokus pada safety dan technique. Ramah dan cocok untuk pemula.",
    specialties: ["Safety Swimming", "Teknik Gaya Punggung", "Dewasa"],
    initials: "AF",
  },
];
