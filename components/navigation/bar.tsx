import React from "react";
import Image from "next/image";
import Link from "next/link";
import WalletButton from "@/components/buttons/wallet";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image src="/pumpailogo.svg" alt="Pump.AI" width={64} height={64} />
      </Link>
      <ul className="flex items-center space-x-8">
        <li>
          <Link
            className="text-foreground hover:text-muted-foreground inline-flex items-center underline-offset-4 hover:underline text-sm"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-foreground hover:text-muted-foreground inline-flex items-center underline-offset-4 hover:underline text-sm"
            href="/token"
          >
            Token
          </Link>
        </li>
        <li>
          <Link
            className="text-foreground hover:text-muted-foreground inline-flex items-center underline-offset-4 hover:underline text-sm"
            href="/changelog"
          >
            Changelog
          </Link>
        </li>
        <li>
          <Link
            className="text-foreground hover:text-muted-foreground inline-flex items-center underline-offset-4 hover:underline text-sm"
            href="/docs"
          >
            Docs
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <WalletButton />
      </div>
    </nav>
  );
}
