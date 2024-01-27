import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Roadmap from "@/components/landing/roadmap";
import Tokenomics from "@/components/landing/tokenomics";
import NavBar from "@/components/navigation/bar";

export default function Home() {
  return (
    <main className="max-w-[850px] mx-auto py-8 space-y-12 px-5">
      <NavBar />
      <Hero />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Faq />
      <Footer />
    </main>
  );
}
