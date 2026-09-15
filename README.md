# Cyan Splash

Kelas Renang Privat Rawamangun & Jakarta Timur — landing page company profile untuk jasa les renang privat, lengkap dengan program paket, profil instruktur, galeri, testimoni, FAQ, dan booking request langsung via WhatsApp.

Dibangun dengan **Next.js 16.3.5** + **React 19** + **TypeScript** + **Tailwind CSS 4** + **Lucide React** (App Router, statically rendered).

## Fitur Utama

### Hero & Branding
- Headline utama: "Kelas Renang Privat Rawamangun & Jakarta Timur"
- Badge lokasi, sub-headline, dan statistik key trust (100+ siswa puas, 4+ program, 100% privat)
- Background dekoratif bergradasi cyan + gelombang SVG

### Program Les Renang
- **Private 1-on-1** — latihan intensif, fokus personal
- **Private Group** — 2-4 orang, hemat harga, cocok untuk keluarga
- **Kids Program** — khusus anak 4-12 tahun, pendekatan fun & aman
- **Adult Program** — dewasa 17+, pemula hingga mahir
- Data paket dikelola terpusat di `src/data/programs.ts` (nama, ikon, deskripsi, durasi, highlight, pesan WhatsApp per paket)

### Booking via WhatsApp
- Semua CTA utama mengarah ke `wa.me` dengan pesan otomatis yang sudah disesuaikan per program
- Tombol WhatsApp melayang (floating button) di pojok kanan bawah, selalu terlihat
- Nomor & pesan default dikonfigurasi di `src/lib/constants.ts`

### Profil Instruktur
- Dua kartu profil
- Bio singkat, keahlian (specialties), dan link Instagram masing-masing
- Avatar placeholder gradasi cyan yang mudah diganti foto asli

### Galeri & Social Proof
- Grid 9 foto placeholder gradasi (siap diganti gambar asli)
- Link ke Instagram & TikTok 
- Testimoni siswa + orang tua dengan rating bintang (data di `src/data/testimonials.ts`)

### FAQ Accordion
- 6 pertanyaan umum interaktif (durasi sesi, tiket masuk, cara daftar, jadwal, lokasi, pemula)
- Animated expand/collapse, dikelola di `src/data/faq.ts`

### Lokasi
- Kolam Renang Bojana Tirta, Rawamangun, Jakarta Timur
- Placeholder Google Maps embed (URL diganti di `src/lib/constants.ts`)

### SEO
- Metadata lengkap: title, description, keyword (les renang privat, jakarta timur, rawamangun)
- Open Graph dengan locale `id_ID`
- Semua halaman static prerendered

## Alur Calon Siswa

```
Pengunjung ──► Lihat Hero & Program ──► Klik CTA / Floating WhatsApp
                                              │
                                              ▼
                                    Chat via WhatsApp (pesan otomatis)
                                              │
                                              ▼
                              Tanya harga & jadwal → Booking
                                              │
                                              ▼
                                Latihan di Kolam Bojana Tirta
```

## Cara Menjalankan

```bash
npm install     # install dependency
npm run dev     # jalankan dev server → http://localhost:3000
```

Build produksi:

```bash
npm run build   # build produksi (static prerender)
npm run start   # jalankan server produksi
```

## Konfigurasi

Semua nilai kunci dikelola di `src/lib/constants.ts`:

| Item | Lokasi | Nilai Saat Ini |
|---|---|---|
| Nomor WhatsApp | `SITE.phone` | `628XXXXXXXXXX` (placeholder) |
| Pesan WA default | `SITE.waMessage` | "Halo Cyan Splash, saya tertarik untuk daftar kelas renang privat!" |
| Alamat kolam | `SITE.address` | Kolam Renang Bojana Tirta, Rawamangun, Jakarta Timur |
| Google Maps embed | `SITE.mapsEmbedUrl` | placeholder |
| Instagram | `SITE.instagram` | https://instagram.com/ |
| TikTok | `SITE.tiktok` | https://tiktok.com/ |
| IG Trainer 1 | `SITE.trainerInstagram1` | https://instagram.com/|
| IG Trainer 2 | `SITE.trainerInstagram2` | https://instagram.com/|

Data konten yang bisa diubah kapan saja tanpa menyentuh komponen:

| Data | File |
|---|---|
| Paket program | `src/data/programs.ts` |
| Profil instruktur | `src/data/trainers.ts` |
| Testimoni | `src/data/testimonials.ts` |
| FAQ | `src/data/faq.ts` |

## Produksi & Deploy

Biasanya di-deploy ke Vercel. Jalankan:

```bash
npm run build
```

Kemudian push ke repository dan hubungkan ke [Vercel](https://vercel.com) — proyek Next.js terdeteksi otomatis tanpa konfigurasi tambahan.

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| Next.js 16.3.5 (App Router) | Framework, routing, static prerender |
| React 19 | UI library |
| TypeScript | Type safety seluruh kode |
| Tailwind CSS 4 | Styling utility-first dengan custom palette cyan/navy |
| Lucide React | Ikon UI (waktu, lokasi, person, check, dll.) |
| next/font | Optimasi font Inter (Google Fonts) |

## Struktur Direktori

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: font, metadata, Navbar + Footer + WhatsApp button
│   │   ├── page.tsx            # Halaman utama (susunan semua section)
│   │   └── globals.css         # Tailwind + custom theme (warna cyan/navy)
│   ├── components/
│   │   ├── ui/                 # Reusable: Button, Card, SectionHeader
│   │   ├── layout/             # Navbar (sticky + mobile menu), Footer
│   │   ├── sections/           # Hero, About, Programs, Trainers, Gallery, Testimonials, FAQ, CTA
│   │   └── widgets/            # WhatsAppButton (floating)
│   ├── data/                   # programs, trainers, testimonials, faq (mock data)
│   └── lib/
│       └── constants.ts        # SITE config + getWhatsAppUrl()
├── public/
│   └── images/                 # siap untuk foto asli (gallery, trainer)
└── package.json
```

## Lint

```bash
npm run lint        # ESLint
```

## Catatan

- **Nomor WhatsApp** masih placeholder `628XXXXXXXXXX`. Ganti dengan nomor asli di `src/lib/constants.ts`, dan seluruh CTA + floating button otomatis mengarah ke nomor baru.
- **Gambar** (gallery, foto trainer, avatar) masih berupa placeholder gradasi — ganti dengan file foto di `public/images/` dan sesuaikan path-nya di komponen.
- **Google Maps embed** masih placeholder — ganti `SITE.mapsEmbedUrl` dengan embed URL asli (dari menu Share → Embed map di Google Maps).
- Seluruh konten (paket, testimoni, FAQ, profil trainer) mudah diubah lewat file `src/data/*.ts` tanpa perlu mengubah kode komponen.

© 2026 Cyan Splash.
