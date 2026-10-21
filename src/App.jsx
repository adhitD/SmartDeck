
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

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <Navbar />

      <main>
        <Home />

        <AlurPembelajaran />

        <Tentang />

        <Layanan />

        <Paket />

        <CTA />

        <FAQ />

        <Kontak />
      </main>

      <Footer />
    </div>
  );  
}
