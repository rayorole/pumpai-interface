import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Dots from "@/components/dots";
import { cookieToInitialState } from "wagmi";
import NextTopLoader from "nextjs-toploader";
import { config } from "@/lib/walletconnect";
import Web3ModalProvider from "@/context/walletconnect";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pump.AI",
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
            {children}
          </Web3ModalProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
