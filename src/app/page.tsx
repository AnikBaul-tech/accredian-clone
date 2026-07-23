import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/Hero";
import Stats from "@/features/Stats";
import Clients from "@/features/Clients"
import Edge from "@/features/Edge";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <Edge />
    </>
  );
}