"use client";

import { Button } from "../ui/button";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Divider } from "@tremor/react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { calculateTimeLeft } from "@/lib/presaleTimer";
import { useAccount, useConfig, useReadContract, useSwitchChain } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useChainId } from "wagmi";
import { bsc } from "viem/chains";
import presaleAbi from "@/constants/abi/presale.json";
import { PRESALEBSC } from "@/lib/adresses";
import { writeContract } from "wagmi/actions";
import { TransactionExecutionErrorType, parseEther } from "viem";
import { toast } from "sonner";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center space-x-1">
      <div className="w-16 h-12 border rounded flex items-center justify-center flex-col bg-muted/30">
        {timeLeft.days}
        <span className="text-[0.6rem] text-muted-foreground">Days</span>
      </div>
      <div>:</div>
      <div className="w-16 h-12 border rounded flex items-center justify-center flex-col bg-muted/30">
        {timeLeft.hours}
        <span className="text-[0.6rem] text-muted-foreground">Hours</span>
      </div>
      <div>:</div>
      <div className="w-16 h-12 border rounded flex items-center justify-center flex-col bg-muted/30">
        {timeLeft.minutes}
        <span className="text-[0.6rem] text-muted-foreground">Minutes</span>
      </div>
      <div>:</div>
      <div className="w-16 h-12 border rounded flex items-center justify-center flex-col bg-muted/30">
        {timeLeft.seconds}
        <span className="text-[0.6rem] text-muted-foreground">Seconds</span>
      </div>
    </div>
  );
};

export default function Presale() {
  const [bscValue, setBscValue] = useState(0);
  const [pumpaiValue, setPumpaiValue] = useState(0);
  const { address, isConnecting, isConnected, connector } = useAccount();
  const config = useConfig();
  const { open, close } = useWeb3Modal();
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();
  const pumpaiPerBNB = 1300000; // 1 BNB = 1300000 PUMPAI

  const buyPump = async () => {
    if (!isConnected) {
      open({
        view: "Connect",
      });
    } else {
      if (chainId !== bsc.id) {
        switchChain({
          chainId: bsc.id,
        });
      } else {
        if (bscValue < 0.001) {
          toast.error("Minimum purchase is 0.001 BNB");
          return;
        }

        try {
          const res = await writeContract(config, {
            abi: presaleAbi.abi,
            address: PRESALEBSC,
            functionName: "buy",
            value: parseEther(bscValue.toString()),
          });

          toast.loading("Transaction submitted!", {
            description: "Transaction submitted! Waiting for confirmation...",
            action: {
              label: "View on explorer",
              onClick: () => {
                window.open(`https://testnet.bscscan.com/tx/${res}`, "_blank");
              },
            },
          });
        } catch (err) {
          const error = err as TransactionExecutionErrorType;

          if (error.shortMessage) {
            toast.error(error.shortMessage);
          } else {
            toast.error(error.message);
          }
        }
      }
    }
  };

  return (
    <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      <div className="grid gap-10 grid-cols-none md:grid-cols-2">
        <div className="p-3 w-full">
          <Image
            src="/pumpailogo.png"
            alt="Pump.ai"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="gap-1 flex flex-col justify-center">
          <div className="space-y-2">
            <h4 className="text-md text-foreground font-medium tracking-tight">
              Time left until presale stops
            </h4>
            <CountdownTimer />
          </div>
          <Divider className="text-center">
            <h4 className="text-md text-foreground font-medium tracking-tight">
              Presale price
            </h4>
            <p className="text-sm text-muted-foreground">
              1 BNB = {pumpaiPerBNB} PUMPAI
            </p>
          </Divider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="sol">
                <span className="text-xs flex items-center">Pay with BNB</span>
              </Label>
              <Input
                type="number"
                id="sol"
                placeholder="0"
                min="0.0002"
                step="0.0002"
                value={bscValue}
                onChange={(event) => {
                  const val = parseFloat(event.target.value); // Extract numeric value from input
                  if (!isNaN(val)) {
                    // Check if it's a valid number
                    setBscValue(val);
                    setPumpaiValue(val * pumpaiPerBNB);
                  } else if (event.target.value === "") {
                    setBscValue(0);
                    setPumpaiValue(0);
                  }
                }}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pumpai">
                <span className="text-xs flex items-center">
                  You will receive PUMPAI{" "}
                  <Image
                    src="/pumpailogo.png"
                    alt="Pump.ai"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </span>
              </Label>
              <Input
                type="number"
                id="sol"
                placeholder="0"
                value={pumpaiValue}
                onChange={(event) => {
                  const val = parseFloat(event.target.value); // Extract numeric value from input
                  if (!isNaN(val)) {
                    // Check if it's a valid number
                    setPumpaiValue(val);
                    setBscValue(val / pumpaiPerBNB);
                  } else if (event.target.value === "") {
                    setBscValue(0);
                    setPumpaiValue(0);
                  }
                }}
              />
            </div>
            <div className="col-span-2 w-full">
              <Button className="w-full" onClick={buyPump}>
                {isConnected
                  ? chainId !== bsc.id
                    ? "Switch to BSC"
                    : "Buy"
                  : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
