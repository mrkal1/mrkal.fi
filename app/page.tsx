"use client";
import Particlescomponent from "@/components/particlescomponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center flex-col p-4 ">
      <div className="-z-50"><Particlescomponent/></div>
      <div className="text-8xl font-semibold">
        Mr. Kal
      </div>
      <div className="flex gap-3 text-xl">
        <Link href="https://github.com/mrkal666">Github</Link>
        <Link href="https://discord.gg/invite/Vrf9gGVMA3">Discord</Link>
        <Link href="https://github.com/mrkal666/mrkal.fi">Source</Link>
      </div>
    </main>
  );
}
