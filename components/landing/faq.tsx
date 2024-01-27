import React from "react";
import ThemePicker from "../theme-picker";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <div className="border-border w-full rounded-lg border px-3 py-4 backdrop-blur-[2px] md:p-6 gap-6">
        <div className="text-center">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            FAQ
          </h4>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How does it work?</AccordionTrigger>
                <AccordionContent className="text-left">
                  You can create a token by simply entering a name and a
                  description. The AI will then generate a logo for you. You can
                  then deploy your token on Solana. For every token deployed,
                  you will receive some $PUMPAI tokens.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the $PUMPAI token?</AccordionTrigger>
                <AccordionContent className="text-left">
                  The $PUMPAI token is the governance token of the PumpAI
                  protocol. It is used to vote on proposals and to reward
                  contributors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I contribute?</AccordionTrigger>
                <AccordionContent className="text-left">
                  There are many ways to contribute to the PumpAI protocol. Such
                  as providing liquidity, creating a token, or simply by buying
                  $PUMPAI tokens. We also have a Github repository where you can
                  contribute to the codebase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
