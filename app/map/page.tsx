"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function MapSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col justify-center gap-6">
        <div className="rounded-xl overflow-hidden mx-4">
          <Map />
        </div>
      </main>

      <Footer />
    </div>
  );
}
