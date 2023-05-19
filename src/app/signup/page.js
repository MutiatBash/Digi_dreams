"use client";
import Image from "next/image";
import Link from "next/link";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { celoAlfajores, celo } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [celoAlfajores, celo],
  // [alchemyProvider({ apiKey : process.env.ALCHEMY_ID }), publicProvider()
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: "https://celo-alfajores.infura.io/v3/8630ca5e1d4d430caaa9f05be63e7952",
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col font-[Poppins] bg-[#1A0329]">
      <header class="top-0 left-0 right-0 bg-[#1A0329]">
        {/* NAVBAR */}
        <nav class="flex flex-row justify-between items-center py-3 px-10">
          <ul class="flex flex-row gap-x-8 items-center">
            <li>
              <a href="#">
                <img src="../images/logo.png" alt="" class="w-8" />
              </a>
            </li>
          </ul>
          <div class="flex flex-row justify-between items-center gap-x-8">
            <button class="rounded-lg bg-gradient-to-br from-[#C293FF] via-[#82C2FF] to-[#7DEFDA] py-3 text-white px-4">
              <Link href="/">← Back Home</Link>
            </button>
          </div>
        </nav>
      </header>
      {/* HERO SECTION */}
      <div class=" h-full flex flex-col items-center justify-between py-8 gap-y-6">
        <h1 class="text-4xl/[62px] font-bold text-white text-center ">
          Welcome to Digi Dreams
        </h1>
        {/* bg-[#B49DFF] */}
        <p class="text-[#c1affc]"> Connect to your wallet to get started</p>
        <div class="border-y-12 bo border-x-12 border-[#faeaf700] rounded-lg flex w-2/5 flex-col justify-between backdrop-blur-md bg-[#F5F5F530] shadow-gray-500/40 items-center px-10 py-16 mx-8 gap-x-8 gap-y-6">
          <div class="">
            <button class="rounded-xl bg-[#f4f3f7] py-3 text-black w-72 px-10 border shadow-md">
              Connect Wallet
            </button>
          </div>
          <div class="">
            <button class="rounded-xl bg-[#f4f3f7] py-3 text-black px-20 border shadow-md">
              Wallet Connect
            </button>
          </div>
          <div class="">
            <button class="rounded-xl bg-[#f4f3f7] py-3 text-black px-20 border shadow-md">
              Coinbase Wallet
            </button>
          </div>
          <ConnectButton style="background-color: blue;" />
        </div>
      </div>
    </main>
  );
}
