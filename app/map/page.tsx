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

      <main>
        <h2 className="text-xl font-bold mb-4">Festival Map</h2>
        <div className="bg-black rounded-lg overflow-hidden">
          <Map />
        </div>
      </main>

      <Footer />
    </div>
  );
}
