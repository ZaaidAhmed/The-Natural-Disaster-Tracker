import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "@/components/icon";

function Map({ disasters }) {
  const position = [51.505, -0.09]; // this goes to london according to the documentation
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={true}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {disasters.map((disaster) => {
        return (
          <Marker
            key={disaster.id} //so the key is  used to make sure  each disaastetr is unique
            icon={icon}
            position={[
              disaster.geometry[0].coordinates[1], // firs the  Latitude then long
              disaster.geometry[0].coordinates[0], // Longitude
            ]}
          >
            <Popup>{disaster.title}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
