import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/walletconnect";
import { headers } from "next/headers";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";
import Web3ModalProvider from "@/providers/walletconnect";
import Dots from "@/components/dots";

import "./globals.css";
import SessionProvider from "@/providers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pump.ai",
  description: "Deploy your token with ease, powered by OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#6D28D9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Dots />
          <Web3ModalProvider initialState={initialState}>
            <SessionProvider>{children}</SessionProvider>
          </Web3ModalProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
