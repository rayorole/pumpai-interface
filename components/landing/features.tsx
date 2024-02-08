import {
  CoinsIcon,
  CrosshairIcon,
  RocketIcon,
  TrendingUpIcon,
  WrenchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const FeaturesAnimation = dynamic(
  () => import("@/components/landing/featuresanimation"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-full" />,
  }
);

export default function Features() {
  return (
    <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="border-border rounded-full border p-2">
          <WrenchIcon className="h-5 w-5" />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Upcoming features
        </h3>
      </div>
      <div className="grid gap-10 grid-cols-none md:grid-cols-2">
        <div className="flex justify-center">
          {/* <Image src="/solana-3d.png" alt="Solana" width={370} height={370} /> */}
          <script
            async
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script>
          {/* @tslint-disable-next-line */}
          <dotlottie-player
            src="https://lottie.host/53e17963-d7f5-45df-b5d7-b29d31b78583/aGIQut4PaH.json"
            background="transparent"
            speed="1"
            style={{
              width: "100%",
              height: "100%",
            }}
            direction="1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <ul className="gap-4 md:gap-6 flex flex-col">
          <li>
            <p className="flex flex-col">
              <span>
                <CoinsIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  AI-powered token creation
                </span>
              </span>
              <span className="text-muted-foreground">
                Create a token with a few clicks. We will take care of the rest.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <TrendingUpIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Automated liquidity
                </span>
              </span>
              <span className="text-muted-foreground">
                Optionally create a liquidity pool for your token.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <RocketIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Custom launchpad
                </span>
              </span>
              <span className="text-muted-foreground">
                Organize a token sale for your investors. All bells and whistles
                included.
              </span>
            </p>
            <Badge variant="secondary">Coming soon</Badge>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <CrosshairIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Token airdrops
                </span>
              </span>
              <span className="text-muted-foreground">
                Reward your community with free tokens.
              </span>
            </p>
            <Badge variant="secondary">Coming soon</Badge>
          </li>
        </ul>
      </div>
    </div>
  );
}
