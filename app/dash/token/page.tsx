import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CoinsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 w-full px-3 py-3 backdrop-blur-[2px] md:px-6 md:py-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Your tokens
        </h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <p>Create token</p>
              <CoinsIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Token type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dash/token/new">Basic</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-muted-foreground">
              More coming soon
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full h-96 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/pumpailogo.svg"
            className="w-32 h-32"
            alt="Pump.ai logo"
            width={128}
            height={128}
          />
          <h4 className="text-2xl font-semibold mt-4">No tokens yet</h4>
          <p className="text-muted-foreground text-sm tracking-tight">
            Create your first token to get started
          </p>
        </div>
      </div>
    </div>
  );
}
