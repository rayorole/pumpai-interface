import {
  HashIcon,
  HelpCircleIcon,
  ShoppingBagIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";

export default function HowToBuy() {
  return (
    <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="border-border rounded-full border p-2">
          <HelpCircleIcon className="h-5 w-5" />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          How to buy?
        </h3>
      </div>
      <div className="grid gap-10">
        <ul className="gap-4 md:gap-6 grid md:grid-cols-3">
          <li>
            <p className="flex flex-col">
              <span>
                <WalletIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Connect your wallet
                </span>
              </span>
              <span className="text-muted-foreground text-sm mt-2">
                Before you can buy tokens, you need to connect your wallet to
                the app.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <HashIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Choose an amount
                </span>
              </span>
              <span className="text-muted-foreground text-sm mt-2">
                Choose the amount of tokens you want to buy, and click the buy
                button.
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span>
                <ShoppingBagIcon className="text-foreground/80 mb-1 mr-1.5 inline-flex h-4 w-4" />
                <span className="text-foreground font-medium">
                  Confirm the transaction
                </span>
              </span>
              <span className="text-muted-foreground text-sm mt-2">
                Confirm the transaction in your wallet, and you&apos;re done!
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
