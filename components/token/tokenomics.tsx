import {
  ArrowUpRightIcon,
  BotIcon,
  CoinsIcon,
  GlobeIcon,
  PlayCircleIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { TokenSharesDonut } from "../charts/tokenshares";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Tokenomics() {
  return (
    <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="border-border rounded-full border p-2">
          <CoinsIcon className="h-5 w-5" />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Tokenomics
        </h3>
      </div>
      <div className="grid gap-10 grid-cols-none md:grid-cols-2">
        <ul className="gap-4 md:gap-6 flex flex-col">
          <li>
            <p className="flex flex-col">
              <span>
                <GlobeIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Global Monitoring
                </span>
              </span>
              <span className="text-muted-foreground">
                Monitor your endpoints from all over the world. We currently
                support all the continents.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <PlayCircleIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Monitor anything
                </span>{" "}
              </span>
              <span className="text-muted-foreground">
                API, DNS, domain, SSL, SMTP, ping, webpage... We can monitor it
                all.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <BotIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Cron Monitoring
                </span>{" "}
              </span>
              <span className="text-muted-foreground">
                Never let a cron job fail you. Get notified when a jobs did not
                run successfully.
              </span>
            </p>
            <Badge variant="secondary">Coming soon</Badge>
          </li>
          <Button asChild variant="outline" size="sm" className="w-fit">
            <Link href="https://solscan.io/">
              View on Solscan
              <ArrowUpRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />
            </Link>
          </Button>
        </ul>
        <div className="flex justify-center p-5">
          <TokenSharesDonut />
        </div>
      </div>
      <div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <small className="text-sm leading-none">
            Token name: <span className="font-medium"> Pump.AI</span>
          </small>
          <Separator orientation="vertical" />
          <small className="text-sm font-medium leading-none">
            Token symbol: <span className="font-medium"> $PUMPAI</span>
          </small>
          <Separator orientation="vertical" />
          <small className="text-sm font-medium leading-none">
            Token decimals: <span className="font-medium"> 9</span>
          </small>
          <Separator orientation="vertical" />
          <small className="text-sm font-medium leading-none">
            Total supply: <span className="font-medium"> 100,000,000</span>
          </small>
        </div>
      </div>
    </div>
  );
}
