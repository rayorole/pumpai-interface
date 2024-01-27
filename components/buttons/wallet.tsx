"use client";

import getProvider from "@/lib/getProvider";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, WalletIcon } from "lucide-react";
import { toast } from "sonner";

export default function WalletButton() {
  const [pubKey, setPubKey] = useState<string | null>(null);
  const provider = getProvider();

  useEffect(() => {
    provider!
      .connect({ onlyIfTrusted: true })
      .then(({ publicKey }) => {
        console.log(publicKey);
      })
      .catch((err) => {
        console.log(err);
      });

    provider!.on("connect", (publicKey) => {
      setPubKey(publicKey);
    });

    // Store user's public key once they connect

    // Forget user's public key once they disconnect
    provider!.on("disconnect", () => {
      setPubKey(null);

      toast.info("Disconnected from wallet");
    });
  }, [provider]);

  async function connectWallet() {
    // If logged in, redirect to /dash
    if (pubKey) {
      window.location.href = "/dash";
    } else {
      try {
        const resp = await provider!.connect();

        toast.success("Successfully connected!");

        window.location.replace("/dash");
      } catch (err) {
        toast.error("Failed to connect to wallet");
      }
    }
  }

  // bg-gradient-to-r from-[#03E1FF] to-[#DC1FFF]

  return (
    <Button
      onClick={connectWallet}
      size="sm"
      className="bg-gradient-to-r from-[#DC1FFF] to-primary backdrop-blur-[3px] shadow-2xl hover:shadow-primary transition hover:opacity-100 opacity-80 duration-200 hover:from-[#03E1FF] hover:to-[#DC1FFF]"
    >
      {pubKey ? (
        <>
          <span>Dashboard</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </>
      ) : (
        <>
          <span>Connect wallet</span>
          <WalletIcon className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  );
}
