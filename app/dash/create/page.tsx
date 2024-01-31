import { TokenForm } from "@/components/dash/tokenform";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 w-full px-3 py-3 backdrop-blur-[2px] md:px-6 md:py-5">
      <div className="w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Creating a new token
        </h3>
        <p className="text-sm text-muted-foreground">
          Create a new token and start minting!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4 divide-x">
        <div className="col-span-2">
          <TokenForm />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
