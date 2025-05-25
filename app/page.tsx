"use client";
// import Map from "../components/Map";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});
import LineupSchedule from "../components/LineupSchedule";
import InstallPWA from "../components/InstallPWA";

export default function Home() {
  return (
    <div className="p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">HeartU Festival</h1>
      </header>

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
    </div>
  );
}
