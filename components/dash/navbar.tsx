"use client";

import Image from "next/image";
import Link from "next/link";
import Jazzicon from "react-jazzicon";
import { Button } from "../ui/button";
import {
  BookIcon,
  GlobeIcon,
  LogOutIcon,
  NetworkIcon,
  TwitterIcon,
} from "lucide-react";
import ThemePicker from "../theme-picker";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { Skeleton } from "../ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Badge } from "../ui/badge";

export default function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, chain } = useAccount();
  const { disconnect } = useDisconnect();

  const handleLogout = () => {
    disconnect();
    signOut({
      callbackUrl: "/", // Redirect to home page after logout
      redirect: true,
    });
  };

  const handleNetwork = () => {
    open({
      view: "Networks",
    });
  };

  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 flex w-full items-center justify-between px-3 py-3 backdrop-blur-lg md:px-6 md:py-3">
      <div className="flex divide-x gap-6">
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

        <ul className="flex px-6">
          <li>
            <Link
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200 dark:hover:text-white text-neutral-700 h-9 px-4 py-2 hover:bg-muted/70"
              href="/dash/token"
            >
              Tokens
            </Link>
          </li>
          <li>
            <Link
              className="inline-flex items-center justify-center space-x-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200 dark:hover:text-white text-neutral-700 h-9 px-4 py-2 hover:bg-muted/70"
              href="/dash/nft"
            >
              <span>NFT</span>
              <Badge variant="secondary" className="text-xs">
                Coming soon
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-2">
          <li className="w-full">
            <Button asChild size="icon" variant="ghost">
              <Link href="https://docs.pumpai.finance/">
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="relative">
              {isConnecting ? (
                <Skeleton className="w-8 h-8 rounded-full" />
              ) : address ? (
                <Jazzicon
                  diameter={24}
                  seed={parseInt(address.slice(2, 10), 16)}
                />
              ) : (
                <Skeleton className="w-8 h-8 rounded-full" />
              )}
              {/* 
              <span className="absolute top-0 right-0 w-2 h-2">
                {chain?.name}
              </span> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>
              {
                // 0x1234...5678
                address
                  ? `${address.slice(0, 6)}...${address.slice(-4)}`
                  : "Connect Wallet"
              }
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleNetwork}>
              <GlobeIcon className="mr-2 h-4 w-4" />
              <span>Change network</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500" onClick={handleLogout}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Disconnect</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
