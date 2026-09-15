export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rina S.",
    role: "Ibu dari Anak Usia 7 Tahun",
    quote:
      "Anak saya tadinya takut air, sekarang malah minta terus les renang! Coach-nya sabar banget dan metode belajarnya fun. Recommended banget!",
    rating: 5,
  },
  {
    id: "2",
    name: "Dimas P.",
    role: "Dewasa Pemula",
    quote:
      "Gue yang udah 25 tahun nggak bisa renang, sekarang udah pedaya berenang sendiri. Coach-nya jelas banget ngajarinnya, nggak ngeburu.",
    rating: 5,
  },
  {
    id: "3",
    name: "Aditya K.",
    role: "Ayah dari 2 Anak",
    quote:
      "Anak-anak saya ikut private group, harganya hemat dan seru! Lokasi kolamnya juga bersih dan nyaman di Bojana Tirta.",
    rating: 5,
  },
  {
    id: "4",
    name: "Maya L.",
    role: "Mahasiswi",
    quote:
      "Awalnya malu-malu, tapi Coach Aliif bikin suasana jadi nyaman. Sekarang udah bisa gaya bebas dan dada! Thanks Cyan Splash!",
    rating: 5,
  },
];
