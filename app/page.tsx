"use server";

import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Roadmap from "@/components/landing/roadmap";
import NavBar from "@/components/navigation/bar";
import dynamic from "next/dynamic";

export default async function Home() {
  return (
    <main className="max-w-[850px] mx-auto py-8 space-y-12 px-5">
      <NavBar />
      <Hero />
      <Features />
      <Roadmap />
      <Faq />
      <Footer />
    </main>
  );
}
