"use client";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="">
      {/* <header className="flex justify-end w-full h-fit py-2">
        <button className="flex items-center">
          <i className="ri-equalizer-line text-3xl text-gray-500"></i>
        </button>
      </header>

      <main className="flex flex-col gap-10 h-screen">
        <div className="flex flex-col">
          <h3 className="text-gray-500">Welkom!</h3>
          <h1 className="text-black">HeartU informatie</h1>
        </div>

        <div className="flex bg-pink-400 w-full h-1/4 rounded-xl">
          <p>Bekijk hier de festival map</p>
        </div>

        <div className="flex bg-pink-400 w-full h-1/4 rounded-xl">
          <p>Bekijk hier de live line up</p>
        </div>
      </main> */}

      <main>
        <h1 className="text-2xl font-bold mb-4">Festival kaart</h1>
        <div className="bg-black">
          <Map />
        </div>
      </main>
    </div>
  );
}
