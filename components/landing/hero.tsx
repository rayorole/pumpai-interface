import { ArrowRight, Github, MapIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1300px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 relative">
      <a
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        href="/docs/changelog"
      >
        🎉
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] mx-2 h-4"
        ></div>
        <span className="sm:hidden">$PUMPAI - Live on BSC Mainnet</span>
        <span className="hidden sm:inline">$PUMPAI - Live on BSC Mainnet</span>
        <ArrowRight className="ml-1 w-4 h-4" />
      </a>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Launch your token within seconds
      </h1>
      <span
        className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-4"
        data-brr="1"
      >
        Pump.ai allows everyone to create their own token using the power of AI.
      </span>
      <div className="my-3 text-center">
        <small className="text-sm font-medium leading-none">Powered by</small>
        <div className="flex items-center space-x-3">
          <Image
            src="/solana-dark.png"
            alt="Solana"
            width={96}
            height={100}
            className="dark:hidden"
          />
          <Image
            src="/solana-light.png"
            alt="Solana"
            width={96}
            height={100}
            className="hidden dark:block"
          />
          <div className="h-6 border-l border-secondary"></div>
          <Image src="/openai.png" alt="Open-AI" width={100} height={100} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button asChild size="sm">
          <Link href="/docs">Deploy now</Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href="#roadmap">
            <MapIcon className="w-4 h-4 mr-2" />
            Roadmap
          </Link>
        </Button>
      </div>
    </section>
  );
}
