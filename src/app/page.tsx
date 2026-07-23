import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/Hero";
import Stats from "@/features/Stats";
import Clients from "@/features/Clients";
import Edge from "@/features/Edge";
import CAT from "@/features/CAT";
import FAQ from "@/features/FAQ";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <>
        <Navbar />
        <Hero />
        <Stats />
        <Clients />
        <Edge />
        <CAT />
        <FAQ />
      </>
      <Footer />
    </>
  );
}
