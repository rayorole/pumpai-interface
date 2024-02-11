import { Button } from "@/components/ui/button";
import { TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 w-full px-3 py-3 backdrop-blur-[2px] md:px-6 md:py-5">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">Coming soon</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            NFT token creation is on the way
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            We are working hard to bring you the best experience. Stay tuned for
            updates.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link
                href="#"
                className="rounded-md text-sm font-semibold shadow-sm"
              >
                Go to dashboard
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link
                href="https://twitter.com/PumpAITeam"
                className="text-sm font-semibold"
              >
                Learn more <TwitterIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
