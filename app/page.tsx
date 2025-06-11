"use client";

import LineupSchedule from "../components/LineupSchedule";
import InstallPWA from "../components/InstallPWA";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col justify-center gap-6 mx-6 my-4">
        <Link
          href="/lineup"
          className="bg-blue-500 h-40 rounded-lg shadow-lg text-white"
        >
          <h2>Festival lineup</h2>
        </Link>

        <Link
          href="/info"
          className="bg-blue-500 h-30 rounded-lg shadow-lg text-white"
        >
          <h2>Festival info</h2>
        </Link>

        <Link
          href="/map"
          className="bg-blue-500 h-60 rounded-lg shadow-lg text-white"
        >
          <h2>Festival map</h2>
        </Link>
      </main>

      <InstallPWA />
      <Footer />
    </div>
  );
}
