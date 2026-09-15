export const SITE = {
  name: "Cyan Splash",
  tagline: "Kelas Renang Privat Rawamangun & Jakarta Timur",
  description:
    "Les renang privat untuk anak & dewasa di Rawamangun, Jakarta Timur. Instruktur bersertifikat, jadwal fleksibel.",
  phone: "628XXXXXXXXXX",
  waMessage:
    "Halo Cyan Splash, saya tertarik untuk daftar kelas renang privat!",
  address: "Kolam Renang Bojana Tirta, Rawamangun, Jakarta Timur",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7!2d106.9!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNTQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
  instagram: "https://instagram.com/cyansplash.swimming",
  tiktok: "https://tiktok.com/@cyansplash.swimming",
  trainerInstagram1: "https://instagram.com/aliifhr_",
  trainerInstagram2: "https://instagram.com/anandafarikha",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE.waMessage;
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;
}
