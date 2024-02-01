import ThemePicker from "../theme-picker";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl">
      <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 grid gap-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="order-4 flex flex-col justify-between gap-3 md:order-1">
            <div>
              <Image
                src="/pumpailogo.svg"
                alt="Pump.ai"
                width={64}
                height={64}
              />
              <p className="text-muted-foreground text-xs">
                © {new Date().getFullYear()} Pump.ai. All rights reserved.
              </p>
            </div>
            <div className="text-right md:text-left mt-2">
              <ThemePicker />
            </div>
          </div>
          <div className="order-1 flex flex-col gap-3 text-sm md:order-2">
            <p className="text-foreground font-semibold">Community</p>

            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/discord"
              target="_blank"
              rel="noreferrer"
            >
              Discord
              <ArrowUpRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="https://twitter.com/openstatusHQ"
              target="_blank"
              rel="noreferrer"
            >
              X
              <ArrowUpRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
          <div className="order-2 flex flex-col gap-3 text-sm md:order-3">
            <p className="text-foreground font-semibold">Resources</p>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/changelog"
            >
              Changelog
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="https://docs.openstatus.dev"
              target="_blank"
              rel="noreferrer"
            >
              Docs
              <ArrowUpRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/oss-friends"
            >
              OSS Friends
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/status"
            >
              External Providers Monitoring
            </Link>
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm md:order-4">
            <p className="text-foreground font-semibold">Legal</p>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/legal/terms"
            >
              Terms
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground inline-flex items-center underline underline-offset-4 hover:no-underline"
              href="/legal/privacy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
