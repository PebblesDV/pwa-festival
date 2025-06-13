"use client";

import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { CRS, LatLngBounds, Icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import lineup from "../lib/lineup";

// Default icon fix (important in Next.js)
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Function to create custom icons
const createCustomIcon = (
  iconUrl: string,
  size: [number, number] = [25, 41]
) => {
  return new Icon({
    iconUrl,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [0, -size[1] / 2],
  });
};

// Map stage names to lineup data keys
const stageToLineupKey: Record<string, keyof typeof lineup.saturday> = {
  Ponton: "poton",
  "The Lake": "theLake",
  "The Club": "theClub",
  Hangar: "hanggar",
};

type Day = "saturday" | "sunday";

function ClickLogger() {
  useMapEvents({
    click: (e) => {
      console.log(e.latlng);
    },
  });
  return null;
}

const SvgMapLeaflet = () => {
  const [selectedDay, setSelectedDay] = useState<Day>("saturday");

  // This sets the bounds for the image overlay
  const bounds = new LatLngBounds([
    [0, 0],
    [1000, 2000],
  ]); // [y, x] — match with your image size ratio

  const markers = [
    {
      id: 1,
      name: "Ponton",
      position: [340, 490] as [number, number],
      icon: createCustomIcon("/stage1.svg", [32, 32]),
    },
    {
      id: 2,
      name: "The Lake",
      position: [510, 1050] as [number, number],
      icon: createCustomIcon("/stage2.svg", [32, 32]),
    },
    {
      id: 3,
      name: "The Club",
      position: [570, 1330] as [number, number],
      icon: createCustomIcon("/stage3.svg", [32, 32]),
    },
    {
      id: 4,
      name: "Hangar",
      position: [790, 1690] as [number, number],
      icon: createCustomIcon("/stage4.svg", [32, 32]),
    },
    {
      id: 5,
      name: "Food",
      position: [350, 350] as [number, number],
      icon: createCustomIcon("/food.svg", [16, 16]),
    },
    {
      id: 6,
      name: "Ice Cream",
      position: [310, 590] as [number, number],
      icon: createCustomIcon("/icecream.svg", [16, 16]),
    },
    {
      id: 7,
      name: "Bar",
      position: [250, 340] as [number, number],
      icon: createCustomIcon("/bar.svg", [16, 16]),
    },
    {
      id: 8,
      name: "WC",
      position: [200, 270] as [number, number],
      icon: createCustomIcon("/wc.svg", [16, 16]),
    },
    {
      id: 9,
      name: "Merchandise",
      position: [200, 450] as [number, number],
      icon: createCustomIcon("/merch.svg", [16, 16]),
    },
    {
      id: 10,
      name: "Locker",
      position: [150, 550] as [number, number],
      icon: createCustomIcon("/locker.svg", [24, 24]),
    },
    {
      id: 11,
      name: "Locker",
      position: [160, 660] as [number, number],
      icon: createCustomIcon("/locker.svg", [24, 24]),
    },
    {
      id: 12,
      name: "Merchandise",
      position: [590, 685] as [number, number],
      icon: createCustomIcon("/merch.svg", [16, 16]),
    },
    {
      id: 13,
      name: "Food",
      position: [550, 740] as [number, number],
      icon: createCustomIcon("/food.svg", [16, 16]),
    },
    {
      id: 14,
      name: "Ice Cream",
      position: [580, 800] as [number, number],
      icon: createCustomIcon("/icecream.svg", [16, 16]),
    },
    {
      id: 15,
      name: "WC",
      position: [700, 980] as [number, number],
      icon: createCustomIcon("/wc.svg", [16, 16]),
    },
    {
      id: 16,
      name: "Bar",
      position: [570, 1010] as [number, number],
      icon: createCustomIcon("/bar.svg", [16, 16]),
    },
    {
      id: 17,
      name: "Ice Cream",
      position: [660, 1210] as [number, number],
      icon: createCustomIcon("/icecream.svg", [16, 16]),
    },
    {
      id: 18,
      name: "Merchandise",
      position: [595, 1265] as [number, number],
      icon: createCustomIcon("/merch.svg", [16, 16]),
    },
    {
      id: 19,
      name: "Bar",
      position: [700, 1380] as [number, number],
      icon: createCustomIcon("/bar.svg", [16, 16]),
    },
    {
      id: 20,
      name: "Bar",
      position: [710, 1530] as [number, number],
      icon: createCustomIcon("/bar.svg", [16, 16]),
    },
    {
      id: 21,
      name: "Ice Cream",
      position: [810, 1580] as [number, number],
      icon: createCustomIcon("/icecream.svg", [16, 16]),
    },
    {
      id: 22,
      name: "WC",
      position: [740, 1740] as [number, number],
      icon: createCustomIcon("/wc.svg", [16, 16]),
    },
    {
      id: 23,
      name: "First Aid",
      position: [680, 450] as [number, number],
      icon: createCustomIcon("/firstaid.svg", [16, 16]),
    },
    {
      id: 24,
      name: "Entrance / Exit",
      position: [90, 1325] as [number, number],
      icon: createCustomIcon("/entrance.svg", [60, 60]),
    },
  ];

  return (
    <MapContainer
      crs={CRS.Simple}
      bounds={bounds}
      minZoom={-2}
      maxZoom={2}
      scrollWheelZoom={true}
      attributionControl={false}
      zoomControl={false}
      style={{ height: "600px", width: "100%", backgroundColor: "#3B814A" }}
    >
      <ImageOverlay url="/kaart.svg" bounds={bounds} />
      {markers.map((marker) => {
        const isStage = marker.id <= 4; // First 4 markers are stages
        const lineupKey = isStage ? stageToLineupKey[marker.name] : null;

        return (
          <Marker key={marker.id} position={marker.position} icon={marker.icon}>
            <Popup>
              <div className="text-black">
                <h3 className="font-bold text-lg mb-2">{marker.name}</h3>
                {isStage && lineupKey && (
                  <div className="mt-2">
                    <div className="flex gap-2 mb-3">
                      <button
                        className={`px-3 py-1 rounded text-sm ${
                          selectedDay === "saturday"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => setSelectedDay("saturday")}
                      >
                        Saturday
                      </button>
                      <button
                        className={`px-3 py-1 rounded text-sm ${
                          selectedDay === "sunday"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => setSelectedDay("sunday")}
                      >
                        Sunday
                      </button>
                    </div>
                    <ul className="list-disc pl-4">
                      {lineup[selectedDay][lineupKey].map(
                        (performance, index) => (
                          <li key={index}>
                            {performance.name} ({performance.start} -{" "}
                            {performance.end})
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
      <ClickLogger />
    </MapContainer>
  );
};

export default SvgMapLeaflet;
