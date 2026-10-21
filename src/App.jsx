
import Home from "./components/Home";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Paket from "./components/Paket";
import Kontak from "./components/Kontak";

import Navbar from "./partials/Navbar";
import AlurPembelajaran from "./partials/AlurPembelajaran";
import CTA from "./partials/CTA";
import FAQ from "./partials/FAQ";
import Footer from "./partials/Footer";
import Testimoni from "./partials/Testimonials";
import ScrollReveal from "./partials/ScrollReveal";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <Navbar />

      <main>
        <ScrollReveal direction="left">
          <Home />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <AlurPembelajaran />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Tentang />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Layanan />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Paket />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <CTA />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <FAQ />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Testimoni />
        </ScrollReveal>

        {/* <ScrollReveal direction="left">
          <Kontak />
        </ScrollReveal> */}
      </main>

      <Footer />
    </div>
  );
}

