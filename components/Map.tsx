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
  const [error, setError] = useState<string | null>(null);

  // Fallback position (example coordinates - you should replace with your festival location)
  const fallbackPosition: [number, number] = [52.3676, 4.9041]; // Amsterdam coordinates as example

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation wordt niet ondersteund door je browser");
      setPosition(fallbackPosition);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setError(null);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError(
          "Kan je locatie niet bepalen. Gebruik festival locatie als fallback."
        );
        setPosition(fallbackPosition);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  if (!position) {
    return (
      <div className="p-4 text-center">
        <p>Locatie wordt bepaald...</p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  }

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
