"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Roadmap() {
  return (
    <section className="mx-auto w-full max-w-4xl" id="roadmap">
      <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
        <div className="text-center">
          <div className="py-8">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
                  <h3 className="text-3xl font-semibold">Roadmap</h3>
                  <span className="text-sm font-medium tracking-tight dark:text-gray-400">
                    A more detailed version of our roadmap is available{" "}
                    <Link
                      className="dark:text-white semibold text-primary hover:underline"
                      href="https://docs.pumpai.finance/roadmap"
                    >
                      here
                    </Link>
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-20 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-secondary">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                    <h3 className="text-xl font-semibold tracking">
                      Project launch
                    </h3>
                    <time className="text-xs tracki uppercase dark:text-gray-400">
                      2024 Q1
                    </time>
                    <p className="mt-3">
                      Website launch, token launch, coinmarketcap listing, first
                      token presale
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary before:bg-primary">
                    <h3 className="text-xl font-semibold tracki">
                      Growth and marketing
                    </h3>
                    <time className="text-xs tracki uppercase dark:text-gray-400">
                      2024 Q2
                    </time>
                    <p className="mt-3">
                      Liquidity pool creation, twitter marketing, first airdrop
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                    <h3 className="text-xl font-semibold tracki">
                      Expanding and collaborations
                    </h3>
                    <time className="text-xs tracki uppercase dark:text-gray-400">
                      2024 Q3
                    </time>
                    <p className="mt-3">
                      Expanding to other blockchains, collaborations with other
                      multi-chain projects
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                    <h3 className="text-xl font-semibold tracki">
                      New features and products
                    </h3>
                    <time className="text-xs tracki uppercase dark:text-gray-400">
                      2024 Q4
                    </time>
                    <p className="mt-3">
                      New NFT creation capabilities, new easy-to-use token
                      presale and management platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
