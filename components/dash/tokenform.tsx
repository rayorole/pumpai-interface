"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  token_name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  token_symbol: z.string().min(3, {
    message: "Symbol must be at least 3 characters.",
  }),
});

export function TokenForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token_name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 my-4 w-3/4"
      >
        <FormField
          control={form.control}
          name="token_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token name</FormLabel>
              <FormControl>
                <Input placeholder="PumpToken" {...field} />
              </FormControl>
              <FormDescription>
                The name of your token. This will be used to identify your token
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="token_symbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token symbol</FormLabel>
              <FormControl>
                <Input placeholder="PUMP" {...field} />
              </FormControl>
              <FormDescription>
                The symbol of your token. Like SOL or BTC
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="token_symbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token description</FormLabel>
              <FormControl>
                <Textarea placeholder="An awesome token!" {...field} />
              </FormControl>
              <FormDescription>
                The description of your token. Like SOL or BTC
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-gradient-to-r from-[#DC1FFF] to-primary backdrop-blur-[3px] transition hover:opacity-100 opacity-80 duration-200 hover:from-[#03E1FF] hover:to-[#DC1FFF]"
        >
          Deploy token
        </Button>
      </form>
    </Form>
  );
}
