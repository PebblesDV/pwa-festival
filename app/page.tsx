"use client";
// import Map from "../components/Map";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});
import LineupSchedule from "../components/LineupSchedule";
import InstallPWA from "../components/InstallPWA";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <main className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Festival Map</h2>
          <div className="bg-black rounded-lg overflow-hidden">
            <Map />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Festival Lineup</h2>
          <div className="bg-white rounded-lg shadow-lg">
            <LineupSchedule />
          </div>
        </section>
      </main>

      <InstallPWA />

      <Footer />
    </div>
  );
}
