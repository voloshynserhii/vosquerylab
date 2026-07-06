import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Services from "@/containers/Services";
import Clients from "@/containers/Clients";
import Contact from "@/containers/Contact";
import Footer from "@/components/Footer";
import HomeSeoContent from "@/containers/HomeSeoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering and AI Automation Studio",
  description:
    "Vosquery Lab builds AI agents, LLM applications, RAG systems, MCP integrations, workflow automation and custom AI software for B2B teams.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vosquery Lab - AI Engineering and Automation Studio",
    description:
      "AI agents, LLM applications, RAG systems, MCP integrations and custom AI automation for B2B products and operations.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <HomeSeoContent />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
