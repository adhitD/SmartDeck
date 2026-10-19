import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "🎨",
    title: "Media pembelajaran Canva",
    desc: "Materi visual yang menarik, rapi, dan mudah dipahami—disesuaikan dengan tujuan pembelajaran dan karakter peserta didik.",
    tags: ["Presentasi interaktif", "Infografis", "Materi visual"],
    tone: "blue",
  },
  {
    number: "02",
    icon: "🎮",
    title: "Evaluasi interaktif Wordwall",
    desc: "Latihan dan evaluasi dengan aktivitas seperti kuis, mencocokkan pasangan, roda acak, dan permainan edukatif lainnya.",
    tags: ["Kuis", "Game edukasi", "Latihan soal"],
    tone: "orange",
  },
  {
    number: "03",
    icon: "✨",
    title: "Paket Canva + Wordwall",
    desc: "Kombinasi materi dan evaluasi yang saling terhubung agar pengalaman belajar terasa lebih utuh, aktif, dan menyenangkan.",
    tags: ["Satu alur belajar", "Desain konsisten", "Siap digunakan"],
    tone: "gradient",
  },
];
const packages = [
  {
    name: "SmartStart",
    label: "PAKET DASAR",
    price: "Mulai dari konsultasi",
    desc: "Cocok untuk pendidik yang membutuhkan media belajar visual dan sederhana.",
    features: [
      "1 media Canva",
      "1 aktivitas Wordwall",
      "Desain sesuai materi",
      "Revisi ringan",
    ],
    color: "blue",
  },
  {
    name: "SmartLearn",
    label: "PAKET POPULER",
    price: "Disesuaikan kebutuhan",
    desc: "Pilihan seimbang untuk pembelajaran yang lebih interaktif dari awal sampai evaluasi.",
    features: [
      "Materi Canva terstruktur",
      "Beberapa aktivitas Wordwall",
      "Alur belajar terpadu",
      "Konsultasi dan revisi",
    ],
    color: "orange",
  },
  {
    name: "SmartClass",
    label: "PAKET LENGKAP",
    price: "Konsultasi proyek",
    desc: "Untuk kebutuhan pembelajaran yang lebih lengkap dengan konsep dan visual konsisten.",
    features: [
      "Paket media sesuai proyek",
      "Variasi evaluasi interaktif",
      "Penyesuaian identitas visual",
      "Pendampingan penggunaan",
    ],
    color: "gradient",
  },
];
const testimonials = [
  {
    quote:
      "Materi jadi lebih menarik dan aktivitas evaluasinya membuat siswa lebih antusias untuk mencoba.",
    name: "Pendidik",
    role: "Pengguna media pembelajaran",
  },
  {
    quote:
      "Perpaduan media Canva dan Wordwall membantu alur belajar terasa lebih terarah.",
    name: "Pengajar",
    role: "Pengguna layanan SmartDeck",
  },
  {
    quote:
      "Desainnya bisa disesuaikan dengan materi, jadi tidak hanya menarik tetapi tetap punya tujuan belajar.",
    name: "Tim pembelajaran",
    role: "Kolaborator edukasi",
  },
];

function Brand({ light = false }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-3 font-extrabold tracking-tight ${light ? "text-white" : "text-[#024C99]"}`}
    >
      <img src="logo.png" className="w-40 xl:w-40 h-auto" alt="" />{" "}
    </a>
  );
}

function CanvaPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -left-3 top-12 h-24 w-24 rounded-full bg-[#F7963A]/20 blur-2xl sm:-left-8" />
      <div className="absolute -right-3 bottom-5 h-32 w-32 rounded-full bg-[#009DFC]/20 blur-2xl" />
      <div className="relative rounded-[2rem] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-100/70 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F7963A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#009DFC]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#024C99]" />
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#024C99]">
            PREVIEW MEDIA
          </span>
        </div>
        <div className="grid gap-4 py-5 sm:grid-cols-[1.05fr_.95fr] sm:items-center">
          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#C76A13]">
              Belajar jadi seru
            </span>
            <h3 className="mt-3 text-2xl font-black leading-tight text-[#024C99] sm:text-3xl">
              Jelajahi dunia pengetahuan!
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Materi ringkas, visual menarik, dan aktivitas untuk menguji
              pemahamanmu.
            </p>
            <div className="mt-5 h-2.5 w-4/5 rounded-full bg-blue-100">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC]" />
            </div>
            <p className="mt-2 text-xs font-semibold text-slate-400">
              Materi pembelajaran · 60% selesai
            </p>
          </div>
          <div className="relative min-h-[190px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#024C99] to-[#009DFC] p-4 text-white">
            <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full border-[18px] border-white/10" />
            <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-[#F7963A]" />
            <div className="relative z-10 flex h-full min-h-[158px] flex-col justify-between">
              <span className="text-xs font-bold tracking-widest text-white/70">
                SMARTDECK CLASS
              </span>
              <div className="text-5xl">📚</div>
              <div>
                <p className="text-lg font-extrabold">Ayo belajar!</p>
                <p className="text-xs text-white/75">
                  Pahami · Coba · Evaluasi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
          {[
            { icon: "📖", label: "Materi" },
            { icon: "🧩", label: "Aktivitas" },
            { icon: "🏆", label: "Evaluasi" },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-xl bg-slate-50 px-2 py-3 text-center"
            >
              <div className="text-xl">{x.icon}</div>
              <p className="mt-1 text-xs font-bold text-slate-600">{x.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-8 sm:p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-xl">
            🎯
          </span>
          <div>
            <p className="text-sm font-extrabold text-slate-800">
              Evaluasi interaktif
            </p>
            <p className="text-xs text-slate-500">Powered by Wordwall</p>
          </div>
          <span className="ml-2 text-xl text-[#F7963A]">↗</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, desc, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p
        className={`text-xs font-extrabold uppercase tracking-[.22em] ${light ? "text-[#F7963A]" : "text-[#009DFC]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 leading-7 ${light ? "text-white/65" : "text-slate-500"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    need: "Paket Canva + Wordwall",
    message: "",
  });
  const nav = [
    ["Beranda", "#home"],
    ["Layanan", "#layanan"],
    ["Paket", "#paket"],
    ["Tentang", "#tentang"],
    ["Kontak", "#kontak"],
  ];
  const submitContact = (e) => {
    e.preventDefault();
    const text = `Halo SmartDeck!%0A%0ANama: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AKebutuhan: ${encodeURIComponent(form.need)}%0APesan: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-blue-50 bg-white/90 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Brand />
          <button
            className="rounded-xl p-2 text-2xl text-[#024C99] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu"
          >
            ☰
          </button>
          <div
            className={`${menuOpen ? "absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-blue-100 bg-white p-5 shadow-lg" : "hidden"} md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {nav.map(([label, href]) => (
              <a
                key={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#024C99]"
                href={href}
              >
                {label}
              </a>
            ))}
            <a
              onClick={() => setMenuOpen(false)}
              href="#kontak"
              className="ml-1 rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-3 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5"
            >
              Konsultasi gratis ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 md:min-h-[690px] md:grid-cols-2 md:py-24"
        >
          <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-bold text-[#024C99]">
              <span className="text-[#F7963A]">✦</span> Partner media
              pembelajaran kreatif
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem]">
              Belajar lebih menarik,{" "}
              <span className="bg-gradient-to-r from-[#024C99] to-[#009DFC] bg-clip-text text-transparent">
                evaluasi lebih interaktif.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
              SmartDeck membantu pendidik membuat media pembelajaran interaktif
              dengan Canva dan evaluasi menyenangkan menggunakan
              Wordwall—dirancang sesuai kebutuhan belajar Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#layanan"
                className="rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-7 py-4 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1"
              >
                Jelajahi layanan ↗
              </a>
              <a
                href="#tentang"
                className="rounded-full border-2 border-blue-100 bg-white px-7 py-4 font-extrabold text-[#024C99] transition hover:border-[#009DFC] hover:bg-blue-50"
              >
                Kenali SmartDeck
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span>✓ Desain sesuai kebutuhan</span>
              <span>✓ Materi dan evaluasi terpadu</span>
              <span>✓ Lebih menarik untuk siswa</span>
            </div>
          </div>
          <div className="relative z-10 px-2 pb-5 pt-3 sm:px-6">
            <CanvaPreview />
          </div>
        </section>

        <section className="border-y border-blue-50 bg-[#F7FBFF] px-5 py-7 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">
              Satu alur pembelajaran
            </span>
            <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
                🎨
              </span>{" "}
              Canva <span className="text-[#F7963A]">→</span>
            </span>
            <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
                🎮
              </span>{" "}
              Wordwall <span className="text-[#F7963A]">→</span>
            </span>
            <span className="flex items-center gap-2 font-extrabold text-[#024C99]">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm">
                💡
              </span>{" "}
              Pengalaman belajar lebih aktif
            </span>
          </div>
        </section>

        <section id="tentang" className="px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#024C99] to-[#009DFC] p-8 text-white sm:p-12">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[28px] border-white/10" />
              <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#F7963A]" />
              <div className="relative z-10">
                <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest">
                  Tentang SmartDeck
                </span>
                <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
                  Bukan hanya menarik dilihat, tapi juga bermakna untuk
                  dipelajari.
                </h2>
                <p className="mt-5 max-w-md leading-7 text-white/80">
                  Kami memadukan desain materi yang komunikatif dengan evaluasi
                  berbasis aktivitas agar pendidik punya pengalaman belajar yang
                  lebih utuh.
                </p>
                <div className="mt-8 flex gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl">🎨</p>
                    <p className="mt-2 text-sm font-extrabold">Visual</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl">🧩</p>
                    <p className="mt-2 text-sm font-extrabold">Interaktif</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl">🎯</p>
                    <p className="mt-2 text-sm font-extrabold">Terarah</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
                Belajar dengan cara yang lebih hidup
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Dari penyampaian materi sampai mengukur pemahaman.
              </h2>
              <p className="mt-5 leading-8 text-slate-500">
                SmartDeck adalah layanan pembuatan media pembelajaran
                interaktif. Canva digunakan untuk menyajikan materi secara
                visual dan terstruktur, sedangkan Wordwall digunakan untuk
                membuat latihan serta evaluasi dalam bentuk permainan edukatif.
              </p>
              <div className="mt-7 space-y-5">
                {[
                  {
                    n: "01",
                    title: "Pahami kebutuhan",
                    desc: "Kami mulai dari tujuan belajar, topik, dan karakter peserta didik.",
                  },
                  {
                    n: "02",
                    title: "Rancang pengalaman belajar",
                    desc: "Materi Canva dibuat konsisten, lalu dilengkapi aktivitas Wordwall.",
                  },
                  {
                    n: "03",
                    title: "Siap digunakan di kelas",
                    desc: "Media diserahkan dengan alur yang mudah diikuti dan disesuaikan.",
                  },
                ].map((x) => (
                  <div key={x.n} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 font-black text-[#024C99]">
                      {x.n}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-slate-800">
                        {x.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {x.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="layanan"
          className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Apa yang kami kerjakan"
              title="Media belajar yang dirancang lebih interaktif"
              desc="Pilih layanan yang dibutuhkan atau kombinasikan semuanya menjadi satu pengalaman pembelajaran."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.number}
                  className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/70"
                >
                  <div
                    className={`absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] ${s.tone === "orange" ? "bg-orange-50" : s.tone === "gradient" ? "bg-gradient-to-br from-blue-50 to-orange-50" : "bg-blue-50"}`}
                  />
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${s.tone === "orange" ? "bg-orange-50" : "bg-blue-50"}`}
                    >
                      {s.icon}
                    </span>
                    <span className="text-sm font-black text-slate-300">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 min-h-[96px] leading-7 text-slate-500">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#kontak"
                    className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#024C99] transition group-hover:gap-3"
                  >
                    Diskusikan kebutuhan{" "}
                    <span className="text-[#F7963A]">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paket" className="px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Pilihan layanan"
              title="Paket yang fleksibel untuk kebutuhan Anda"
              desc="Setiap materi punya tujuan berbeda. Paket dan ruang lingkup pekerjaan dapat disesuaikan setelah konsultasi."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map((p) => (
                <article
                  key={p.name}
                  className={`relative flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${p.color === "orange" ? "border-[#F7963A] bg-white shadow-xl shadow-orange-100" : "border-blue-100 bg-white shadow-sm"}`}
                >
                  {p.color === "orange" && (
                    <span className="absolute -top-3 right-6 rounded-full bg-[#F7963A] px-4 py-1.5 text-xs font-black text-white shadow-lg">
                      PALING DIPILIH
                    </span>
                  )}
                  <p
                    className={`text-xs font-black tracking-[.18em] ${p.color === "orange" ? "text-[#D97720]" : "text-[#009DFC]"}`}
                  >
                    {p.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {p.desc}
                  </p>
                  <p className="mt-6 border-b border-slate-100 pb-6 text-lg font-black text-[#024C99]">
                    {p.price}
                  </p>
                  <ul className="my-6 flex-1 space-y-4">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm font-medium text-slate-600"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-black text-[#009DFC]">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontak"
                    className={`block rounded-xl px-5 py-3.5 text-center font-extrabold transition ${p.color === "orange" ? "bg-[#F7963A] text-white hover:bg-orange-600" : "bg-gradient-to-r from-[#024C99] to-[#009DFC] text-white hover:shadow-lg hover:shadow-blue-200"}`}
                  >
                    Tanyakan paket ini ↗
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              Harga dan detail akhir akan ditentukan berdasarkan jumlah materi,
              kompleksitas desain, serta kebutuhan evaluasi.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-16 text-white sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.22em] text-white/65">
                Mulai dari ide Anda
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Punya materi yang ingin dibuat lebih menarik?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/75">
                Mari diskusikan konsep media pembelajaran yang cocok untuk kelas
                atau program Anda.
              </p>
            </div>
            <a
              href="#kontak"
              className="shrink-0 rounded-full bg-[#F7963A] px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:bg-orange-500"
            >
              Konsultasi sekarang ↗
            </a>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
                Pertanyaan umum
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Yang sering ingin diketahui
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                Belum yakin layanan mana yang cocok? Berikut beberapa hal yang
                bisa membantu.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "Apa itu SmartDeck?",
                  a: "SmartDeck adalah jasa pembuatan media pembelajaran interaktif yang menggabungkan Canva untuk penyajian materi dan Wordwall untuk latihan atau evaluasi.",
                },
                {
                  q: "Apakah media bisa disesuaikan dengan mata pelajaran?",
                  a: "Ya. Topik, jenjang, tujuan pembelajaran, gaya visual, dan jenis aktivitas dapat dibahas saat konsultasi.",
                },
                {
                  q: "Apakah saya bisa memesan Canva dan Wordwall saja?",
                  a: "Bisa. Anda dapat memilih satu layanan atau menggabungkan keduanya sesuai kebutuhan dan anggaran.",
                },
                {
                  q: "Bagaimana cara memulai pemesanan?",
                  a: "Isi formulir konsultasi di bagian kontak. Informasi tersebut akan disiapkan sebagai pesan WhatsApp untuk Anda tinjau dan kirim.",
                },
              ].map((f, i) => (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-blue-100 bg-white"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-slate-800"
                  >
                    <span>{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${faqOpen === i ? "bg-[#024C99] text-white" : "bg-blue-50 text-[#024C99]"}`}
                    >
                      {faqOpen === i ? "−" : "+"}
                    </span>
                  </button>
                  {faqOpen === i && (
                    <p className="px-5 pb-5 leading-7 text-slate-500">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kontak" 
          className="bg-[#F7FBFF] px-5 py-20 sm:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#009DFC]">
                Mari berkolaborasi
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Ceritakan kebutuhan media pembelajaran Anda.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-slate-500">
                Berikan sedikit informasi mengenai materi, target peserta didik,
                dan bentuk media yang diinginkan. Kami dapat mulai dari sana.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "🎨",
                    title: "Materi visual",
                    desc: "Dibuat melalui Canva",
                  },
                  {
                    icon: "🎮",
                    title: "Evaluasi interaktif",
                    desc: "Aktivitas melalui Wordwall",
                  },
                  {
                    icon: "🤝",
                    title: "Kolaborasi fleksibel",
                    desc: "Ruang lingkup sesuai kebutuhan",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-xl">
                      {x.icon}
                    </span>
                    <div>
                      <p className="font-extrabold text-slate-800">{x.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{x.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form
              onSubmit={submitContact}
              className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 sm:p-9"
            >
              <h3 className="text-2xl font-black text-slate-900">
                Formulir konsultasi
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Lengkapi formulir ini, lalu lanjutkan pesan melalui WhatsApp.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-slate-700">
                  Nama
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
                  />
                </label>
                <label className="text-sm font-bold text-slate-700">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="nama@email.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-bold text-slate-700">
                Layanan yang dibutuhkan
                <select
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
                >
                  {[
                    "Paket Canva + Wordwall",
                    "Media pembelajaran Canva",
                    "Evaluasi interaktif Wordwall",
                    "Konsultasi terlebih dahulu",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block text-sm font-bold text-slate-700">
                Ceritakan kebutuhan Anda
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Mata pelajaran, jenjang, topik, atau ide media..."
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#009DFC] focus:ring-4 focus:ring-blue-50"
                />
              </label>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-4 font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5">
                Lanjutkan ke WhatsApp ↗
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-400">
                Pesan akan dibuka di WhatsApp untuk Anda periksa dan kirim.
                Nomor tujuan dapat diatur sesuai kontak bisnis SmartDeck.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#01366D] px-5 pb-8 pt-14 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand light />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Membantu pendidik menciptakan pengalaman belajar yang lebih
              visual, interaktif, dan bermakna melalui Canva dan Wordwall.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-extrabold text-[#F7963A]">Navigasi</h4>
            <div className="grid gap-3 text-sm text-white/70">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-extrabold text-[#F7963A]">Layanan</h4>
            <div className="grid gap-3 text-sm text-white/70">
              <a href="#layanan">Media Canva</a>
              <a href="#layanan">Evaluasi Wordwall</a>
              <a href="#paket">Paket kombinasi</a>
              <a href="#kontak">Konsultasi proyek</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-extrabold text-[#F7963A]">
              Hubungi SmartDeck
            </h4>
            <p className="text-sm leading-7 text-white/65">
              Punya pertanyaan atau ide media pembelajaran? Ceritakan melalui
              formulir konsultasi.
            </p>
            <a
              href="#kontak"
              className="mt-4 inline-flex rounded-full bg-[#F7963A] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-500"
            >
              Mulai konsultasi ↗
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} SmartDeck. Media pembelajaran interaktif
          Canva + Wordwall.
        </div>
      </footer>
    </div>
  );
}
