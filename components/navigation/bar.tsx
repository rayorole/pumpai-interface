import React from "react";
import WalletButton from "../buttons/wallet";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/pumpailogo.svg" alt="Pump.AI" width={64} height={64} />
      </div>
      <div className="flex items-center">
        <WalletButton />
      </div>
    </nav>
  );
}
