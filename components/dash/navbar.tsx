"use client";

import Image from "next/image";
import Link from "next/link";
import Jazzicon from "react-jazzicon";
import { Button } from "../ui/button";
import { BookIcon, TwitterIcon } from "lucide-react";
import ThemePicker from "../theme-picker";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Skeleton } from "../ui/skeleton";

export default function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting } = useAccount();

  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 flex w-full items-center justify-between px-3 py-3 backdrop-blur-lg md:px-6 md:py-3">
      <Link
        className="font-cal text-muted-foreground hover:text-foreground text-lg"
        href="/"
      >
        <Image
          src="/pumpailogo.png"
          alt="Pump.ai"
          width={36}
          height={36}
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex gap-2">
          <li className="w-full">
            <Button asChild size="icon" variant="ghost">
              <Link href="https://twitter.com">
                <BookIcon className="w-4 h-4" />
              </Link>
            </Button>
          </li>
          <li className="w-full">
            <Button asChild size="icon" variant="ghost">
              <Link href="https://twitter.com/PumpAITeam">
                <TwitterIcon className="w-4 h-4" />
              </Link>
            </Button>
          </li>
          <li className="w-full">
            <ThemePicker outline={false} />
          </li>
        </ul>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            open();
          }}
        >
          {isConnecting ? (
            <Skeleton className="w-8 h-8 rounded-full" />
          ) : address ? (
            <Jazzicon diameter={24} seed={parseInt(address.slice(2, 10), 16)} />
          ) : (
            <Skeleton className="w-8 h-8 rounded-full" />
          )}
        </Button>
      </div>
    </div>
  );
}
