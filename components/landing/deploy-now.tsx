"use client";

import { Button } from "../ui/button";
import { ArrowRight, RocketIcon, WalletIcon } from "lucide-react";
import { toast } from "sonner";
import { getCsrfToken, signIn } from "next-auth/react";
import { SiweMessage } from "siwe";
import { useAccount, useChainId, useSignMessage } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DeployNow() {
  const { open } = useWeb3Modal();
  const { signMessageAsync } = useSignMessage();
  const chainId = useChainId();
  const { address, isConnected } = useAccount();
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in to Pumpai.finance",
        uri: window.location.origin,
        version: "1",
        chainId: chainId,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: true,
        signature,
        callbackUrl: "/dash",
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Button
      onClick={() => {
        if (!isConnected) {
          open();
          return;
        } else {
          if (session) {
            router.push("/dash");
            return;
          }
          handleLogin();
        }
      }}
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
          <span>Deploy Now</span>
          <RocketIcon className="ml-2 w-4 h-4" />
        </>
      )}
    </Button>
  );
}
