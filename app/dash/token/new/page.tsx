import { TokenForm } from "@/components/dash/token-creation/tokenform";
export default function Page() {
  return (
    <div className="border-border rounded-lg border bg-background/70 w-full backdrop-blur-[2px] p-5 md:p-8">
      <div className="w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create a basic token
        </h3>
        <p className="text-sm text-muted-foreground">
          Create a new token and start minting!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 my-4 divide-x">
        <div className="col-span-full lg:col-span-2">
          <TokenForm />
        </div>
      </div>
    </div>
  );
}
