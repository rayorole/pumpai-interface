import React from "react";
import Image from "next/image";
import Link from "next/link";
import WalletButton from "@/components/buttons/wallet";
import dynamic from "next/dynamic";

const Mobile = dynamic(() => import("@/components/navigation/mobile"), {
  ssr: false,
});

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/pumpailogo.svg"
          alt="Pump.ai"
          width={64}
          height={64}
          className="w-12 h-12 md:h-16 md:w-16"
        />
      </Link>

      <ul className="space-x-3 border-border mx-auto hidden items-center justify-center rounded-full border px-2 backdrop-blur-[2px] md:col-span-3 md:flex md:gap-1">
        <li>
          <Link
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-white text-neutral-700 underline-offset-4 hover:underline h-9 px-4 py-2"
            href="/"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-white text-neutral-700 underline-offset-4 hover:underline h-9 px-4 py-2"
            href="/token"
          >
            Token
          </Link>
        </li> */}
        <li>
          <Link
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-white text-neutral-700 underline-offset-4 hover:underline h-9 px-4 py-2"
            href="/whitepaper"
          >
            Whitepaper
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-white text-neutral-700 underline-offset-4 hover:underline h-9 px-4 py-2"
            href="https://docs.pumpai.finance/"
          >
            Docs
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-3">
        <Mobile />
        <WalletButton />
      </div>
    </nav>
  );
}
