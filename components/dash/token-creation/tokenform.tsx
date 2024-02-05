"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  solidityCompiler,
  getCompilerVersions,
} from "@agnostico/browser-solidity-compiler";
import { generateTokenContract } from "@/lib/token-creation/basic";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { useAccount, useWalletClient } from "wagmi";
import { useRouter } from "next/navigation";

interface CompiledContract {
  contracts: {
    Compiled_Contracts: {
      [contractName: string]: {
        abi: any; // Define the type of abi as per your requirement
        evm: {
          bytecode: {
            object: string; // Define the type of object as per your requirement
          };
        };
      };
    };
  };
}

const FormSchema = z.object({
  token_name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  token_symbol: z.string().min(3, {
    message: "Symbol must be at least 3 characters.",
  }),
  token_supply: z.coerce.number().min(1, {
    message: "Supply must be at least 1.",
  }),
  token_decimals: z.coerce.number().min(1, {
    message: "Decimals must be at least 1.",
  }),
});

export function TokenForm() {
  const [compiling, setCompiling] = useState(false);
  const { address, chain } = useAccount();
  const router = useRouter();
  const { data: walletClient, isError, isLoading } = useWalletClient();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token_name: "",
      token_symbol: "",
      token_supply: 1000000,
      token_decimals: 18,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // const versions = await getCompilerVersions();
    // Using solidity version 0.8.23
    const version = "soljson-v0.8.23+commit.f704f362.js";

    setCompiling(true);

    try {
      generateTokenContract(
        data.token_name,
        data.token_symbol,
        data.token_decimals,
        data.token_supply
      );

      const compiled = (await solidityCompiler({
        version: `https://binaries.soliditylang.org/bin/${version}`,
        contractBody: generateTokenContract(
          data.token_name,
          data.token_symbol,
          data.token_decimals,
          data.token_supply
        ),
        options: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      })) as CompiledContract; // Type assertion to specify the type of compiled

      console.log(compiled);

      const abi = compiled.contracts.Compiled_Contracts["Basic"].abi;
      const bytecode = compiled.contracts.Compiled_Contracts["Basic"].evm
        .bytecode.object as `0x${string}`;

      const hash = await walletClient!.deployContract({
        abi,
        account: address,
        bytecode,
        args: [address],
      });

      toast.loading("Transaction submitted!", {
        description: "Transaction submitted! Waiting for confirmation...",
        action: {
          label: "View on explorer",
          onClick: () => {
            const url = new URL(
              `/tx/${hash}`,
              chain!.blockExplorers?.default.url
            );
            console.log(url.toString());
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deploying your token.");
    }

    setCompiling(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
        <FormField
          control={form.control}
          name="token_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="PumpToken" {...field} />
              </FormControl>
              <FormDescription>
                The name of your token. Like PumpToken or Bitcoin
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="token_symbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Symbol</FormLabel>
              <FormControl>
                <Input placeholder="PUMP" {...field} />
              </FormControl>
              <FormDescription>
                The symbol of your token. Like PUMP or BTC
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="token_decimals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Decimals</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="18" min={1} {...field} />
                </FormControl>
                <FormDescription>
                  The number of decimals your token will have. Usually 18.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="token_supply"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total supply</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1000000" {...field} />
                </FormControl>
                <FormDescription>
                  Total amount of tokens that will be minted.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={compiling}
          className="bg-gradient-to-r space-x-2 from-[#DC1FFF] to-primary backdrop-blur-[3px] transition hover:opacity-100 opacity-80 duration-200 hover:from-[#03E1FF] hover:to-[#DC1FFF]"
        >
          <span>{compiling ? "Compiling" : `Deploy to ${chain?.name}`}</span>
          <ScaleLoader color="#fff" width={2} height={15} loading={compiling} />
        </Button>
      </form>
    </Form>
  );
}
