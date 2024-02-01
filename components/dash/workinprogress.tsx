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
import { Button } from "../ui/button";
import { MapIcon, PlusIcon } from "lucide-react";

export default function WorkInProgress() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <p>Create new</p>
          <PlusIcon className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feature coming soon</DialogTitle>
          <DialogDescription>
            <p>Aack, this feature is not ready yet. Check back later!</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/#roadmap">
                <p>Roadmap</p>
                <MapIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
