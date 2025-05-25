"use client";

import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS, LatLngBounds } from "leaflet";
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

const SvgMapLeaflet = () => {
  // This sets the bounds for the image overlay
  const bounds = new LatLngBounds([
    [0, 0],
    [1000, 2000],
  ]); // [y, x] — match with your image size ratio

  const markers = [
    { id: 1, name: "Main Stage", position: [850, 300] as [number, number] },
    { id: 2, name: "Food Court", position: [200, 1800] as [number, number] },
    { id: 3, name: "Toilets", position: [500, 1000] as [number, number] },
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
      style={{ height: "400px", width: "100%", backgroundColor: "#3B814A" }}
    >
      <ImageOverlay url="/kaart.svg" bounds={bounds} />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SvgMapLeaflet;
