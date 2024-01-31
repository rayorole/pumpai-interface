import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 w-full px-3 py-3 backdrop-blur-[2px] md:px-6 md:py-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Your tokens
        </h3>
        <Button variant="outline">
          Create new
          <PlusIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4">
        <Link
          href="/dash/projects/1"
          className="px-3 py-5 rounded-lg border hover:bg-muted/50 transition duration-100 hover:border-accent"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/pumpailogo.png"
                className="w-8 h-8 rounded-full"
                alt="PumpAI"
                width={32}
                height={32}
              />
              <div className="ml-2">
                <h4 className="text-lg font-semibold">$PUMPAI</h4>
                <p className="text-sm text-muted-foreground">Pump.ai token</p>
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-sm text-muted-foreground ml-2">0.0000</p>
              <p className="text-sm text-muted-foreground ml-1">USD</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
