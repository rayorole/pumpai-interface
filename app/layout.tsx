import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Dots from "@/components/dots";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pump.AI",
  description: "Deploy your Solana token with ease, powered by OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Dots />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
