// Map.js
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "./map.scss"; // Ensure this file contains the necessary styles
import "leaflet/dist/leaflet.css";
import Pin from "./../pin/Pin";

// Default position for the map
const position = [-26.2041, 28.0473];

function Map({ items }) {
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
