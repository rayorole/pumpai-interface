import Tokenomics from "@/components/token/tokenomics";
import NavBar from "@/components/navigation/bar";
import HowToBuy from "@/components/token/howtobuy";

import dynamic from "next/dynamic";
import PresaleSkeleton from "@/components/skeletons/presaleskeleton";
import Footer from "@/components/landing/footer";

const Presale = dynamic(() => import("@/components/token/presale"), {
  ssr: false,
  loading: () => <PresaleSkeleton />,
});

export default function Page() {
  return (
    <main className="max-w-[850px] mx-auto py-8 space-y-12 px-5">
      <NavBar />
      <Presale />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </main>
  );
}
