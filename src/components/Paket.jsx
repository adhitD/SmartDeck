
const packages = [
  {
    name: "SmartStart",
    label: "PAKET DASAR",
    desc: "Cocok untuk guru yang membutuhkan media pembelajaran visual sederhana dan menarik.",
    price: "Mulai dari Rp150.000",
    color: "blue",
    features: [
      "1 media pembelajaran Canva",
      "Desain visual sesuai materi",
      "Materi terstruktur dan menarik",
      "1 kali revisi",
    ],
  },
  {
    name: "SmartLearn",
    label: "PAKET FAVORIT",
    desc: "Kombinasi materi visual dan evaluasi interaktif untuk pengalaman belajar yang lebih menyenangkan.",
    price: "Mulai dari Rp300.000",
    color: "orange",
    features: [
      "1 media pembelajaran Canva",
      "1 evaluasi interaktif Wordwall",
      "Desain sesuai kebutuhan materi",
      "2 kali revisi",
      "Panduan penggunaan media",
    ],
  },
  {
    name: "SmartClass",
    label: "PAKET LENGKAP",
    desc: "Solusi terintegrasi untuk guru atau lembaga pendidikan dengan kebutuhan pembelajaran lebih kompleks.",
    price: "Mulai dari Rp500.000",
    color: "blue",
    features: [
      "Beberapa halaman media Canva",
      "Hingga 3 aktivitas Wordwall",
      "Materi dan evaluasi terintegrasi",
      "Desain sesuai identitas sekolah",
      "2 kali revisi",
      "Konsultasi pengembangan media",
    ],
  },
];

const SectionHeading = ({ eyebrow, title, desc }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-[#F7963A]">
      {eyebrow}
    </p>

    <h2 className="text-3xl font-black leading-tight text-[#024C99] sm:text-4xl">
      {title}
    </h2>

    <p className="mt-4 leading-7 text-slate-600">{desc}</p>
  </div>
);

const Paket = () => {
  return (
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
              className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                p.color === "orange"
                  ? "border-[#F7963A] bg-white shadow-xl shadow-orange-100"
                  : "border-blue-100 bg-white shadow-sm"
              }`}
            >
              {p.color === "orange" && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#F7963A] px-4 py-1.5 text-xs font-black text-white shadow-lg">
                  PALING DIPILIH
                </span>
              )}

              <p
                className={`text-xs font-black tracking-[.18em] ${
                  p.color === "orange"
                    ? "text-[#D97720]"
                    : "text-[#009DFC]"
                }`}
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
                className={`block rounded-xl px-5 py-3.5 text-center font-extrabold transition ${
                  p.color === "orange"
                    ? "bg-[#F7963A] text-white hover:bg-orange-600"
                    : "bg-gradient-to-r from-[#024C99] to-[#009DFC] text-white hover:shadow-lg hover:shadow-blue-200"
                }`}
              >
                Tanyakan paket ini ↗
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Harga dan detail akhir dapat disesuaikan berdasarkan jumlah materi,
          kompleksitas desain, serta kebutuhan evaluasi.
        </p>
      </div>
    </section>
  );
};

export default Paket;
