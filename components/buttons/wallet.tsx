"use client";

import { Button } from "../ui/button";
import { ArrowRight, WalletIcon } from "lucide-react";
import { toast } from "sonner";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export default function WalletButton() {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isConnected } = useAccount();

  async function onClick() {
    if (isConnected) {
      window.location.replace("/dash");
      return;
    }
    if (isConnecting) {
      toast.loading("Already connecting");
      return;
    }
    try {
      await open({
        view: "Connect",
      });
    } catch (error) {
      toast.error("Error occurred while connecting wallet");
    }
  }

  return (
    <Button
      onClick={onClick}
      size="sm"
      className="bg-gradient-to-r from-[#DC1FFF] to-primary backdrop-blur-[3px] shadow-2xl hover:shadow-primary transition hover:opacity-100 opacity-80 duration-200 hover:from-[#03E1FF] hover:to-[#DC1FFF]"
    >
      {isConnected ? (
        <>
          <span>Dashboard</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </>
      ) : (
        <>
          <span>Get started</span>
          <WalletIcon className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  );
}
