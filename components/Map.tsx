"use client";

import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS, LatLngBounds, Icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

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

const SvgMapLeaflet = () => {
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
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={marker.icon}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SvgMapLeaflet;
