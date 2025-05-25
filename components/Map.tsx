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

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // Function to handle successful position
    const handleSuccess = (pos: GeolocationPosition) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      setError(null);
    };

    // Function to handle errors
    const handleError = (err: GeolocationPositionError) => {
      console.log("Geolocation error:", err);
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setError("Please allow location access in your browser settings");
          break;
        case err.POSITION_UNAVAILABLE:
          setError("Location information is unavailable");
          break;
        case err.TIMEOUT:
          setError("Location request timed out");
          break;
        default:
          setError("An unknown error occurred");
      }
    };

    // Try to get position with watchPosition first (more reliable on iOS)
    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    // Fallback to getCurrentPosition if watchPosition fails
    const timeoutId = setTimeout(() => {
      if (!position) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      }
    }, 1000);

    // Cleanup function
    return () => {
      navigator.geolocation.clearWatch(watchId);
      clearTimeout(timeoutId);
    };
  }, [position]);

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 mb-2">{error}</p>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            To enable location access on iOS:
          </p>
          <ol className="text-sm text-gray-600 text-left list-decimal list-inside">
            <li>Open Settings</li>
            <li>Scroll down to Safari</li>
            <li>Tap Location</li>
            <li>Select "Allow" or "Ask Next Time"</li>
          </ol>
          <button
            onClick={() => {
              setError(null);
              setPosition(null);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!position) {
    return (
      <div className="p-4 text-center">
        <p>Requesting location access...</p>
        <p className="text-sm text-gray-600 mt-2">
          Please make sure to allow location access when prompted
        </p>
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
