"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

// Optioneel: custom icon voor markers
const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png", // Zorg dat deze in /public staat
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  if (!position) return <p>Locatie wordt bepaald...</p>;

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <Marker position={position} icon={customIcon}>
        <Popup>Jij bent hier!</Popup>
      </Marker>

      {/* Voorbeeld markers van podia/food stands */}
      <Marker
        position={[position[0] + 0.0005, position[1] + 0.0005]}
        icon={customIcon}
      >
        <Popup>Podium 1</Popup>
      </Marker>
      <Marker
        position={[position[0] - 0.0005, position[1] - 0.0005]}
        icon={customIcon}
      >
        <Popup>Food Stand 1</Popup>
      </Marker>
    </MapContainer>
  );
}
