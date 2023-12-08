"use client";

import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { NavBar } from "./nav";

const dancingScript = Dancing_Script({
  style: "normal",
  subsets: ["latin"],
  weight: "600",
});

export const AppHeader = () => {
  return (
    <div className="inline-flex w-full p-4 justify-between bg-neutral-950/90 sticky top-0 z-10">
      <Link href="/" className={`text-2xl ${dancingScript.className}`}>
        MovieDB
      </Link>
      <NavBar />
    </div>
  );
};
