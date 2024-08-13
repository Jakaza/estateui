// Map.js
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "./map.scss"; // Ensure this file contains the necessary styles
import "leaflet/dist/leaflet.css";

// Default position for the map
const position = [-26.2041, 28.0473];

function Map() {
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
