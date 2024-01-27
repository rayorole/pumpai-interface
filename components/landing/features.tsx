import {
  BotIcon,
  GlobeIcon,
  LineChartIcon,
  PlayCircleIcon,
  WrenchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

export default function Features() {
  return (
    <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="border-border rounded-full border p-2">
          <WrenchIcon className="h-5 w-5" />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features
        </h3>
      </div>
      <div className="grid gap-10 grid-cols-none md:grid-cols-2">
        <div className="flex justify-center">
          <Image src="/solana-3d.png" alt="Solana" width={370} height={370} />
        </div>
        <ul className="gap-4 md:gap-6 flex flex-col">
          <li>
            <p className="flex flex-col">
              <span>
                <GlobeIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Global Monitoring
                </span>{" "}
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
        </ul>
      </div>
    </div>
  );
}
