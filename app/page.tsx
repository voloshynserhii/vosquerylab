import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Services from "@/containers/Services";
import Clients from "@/containers/Clients";
import Contact from "@/containers/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
