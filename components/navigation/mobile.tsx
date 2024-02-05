"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ExternalLink, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Mobile() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon">
            <MenuIcon className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="text-left">
          <SheetHeader className="text-left mb-8">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-2 text-left">
            <Button
              variant="ghost"
              asChild
              className="w-full flex justify-start"
            >
              <Link href="/">Home</Link>
            </Button>
            {/* <Button
              variant="ghost"
              asChild
              className="w-full flex justify-start"
            >
              <Link href="/token">Token</Link>
            </Button> */}
            <Button
              variant="ghost"
              asChild
              className="w-full flex justify-start"
            >
              <Link href="/whitepaper">Whitepaper</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="w-full flex justify-start"
            >
              <Link href="https://docs.pumpai.finance/">
                Docs <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
