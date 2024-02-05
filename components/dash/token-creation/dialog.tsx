import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CoinsIcon, MapIcon } from "lucide-react";
import { TokenForm } from "./tokenform";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TokenCreationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <p>Create token</p>
          <CoinsIcon className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new token</DialogTitle>
          <DialogDescription>
            <p>
              Don&apos;t know where to start? Visit our{" "}
              <Link
                href="/docs"
                className="underline underline-offset-4 text-primary dark:text-white"
              >
                documentation
              </Link>
              .
            </p>
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="exotic">Exotic</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <TokenForm />
          </TabsContent>
          <TabsContent value="exotic">
            <TokenForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
