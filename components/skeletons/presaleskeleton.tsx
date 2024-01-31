"use client";

import { Divider } from "@tremor/react";
import { Skeleton } from "../ui/skeleton";

export default function PresaleSkeleton() {
  return (
    <div className="border-border h-96 rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      <div className="grid gap-10 grid-cols-none md:grid-cols-2">
        <div className="p-3 w-full">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="gap-1 flex flex-col justify-center">
          <div className="space-y-2">
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="w-full h-12" />
          </div>
          <Divider></Divider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Skeleton className="w-full h-12" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Skeleton className="w-full h-12" />
            </div>
            <div className="col-span-2 w-full">
              <Skeleton className="w-full h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
