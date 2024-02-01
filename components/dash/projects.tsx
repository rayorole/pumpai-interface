import { MapIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const WorkInProgress = dynamic(
  () => import("@/components/dash/workinprogress"),
  { ssr: false }
);

export default function Projects() {
  return (
    <div className="border-border rounded-lg border md:p-6 bg-background/70 w-full px-3 py-3 backdrop-blur-[2px] md:px-6 md:py-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Your tokens
        </h3>

        <WorkInProgress />
      </div>

      <div className="w-full h-96 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/pumpailogo.svg"
            className="w-32 h-32"
            alt="PumpAI"
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
