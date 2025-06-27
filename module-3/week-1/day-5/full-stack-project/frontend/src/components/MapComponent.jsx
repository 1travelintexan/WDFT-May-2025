//react leaflet
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function MapComponent() {
  return (
    <>
      <MapContainer
        center={[38.73, -9.14]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "300px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[38.73, -9.14]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Link to="/profile">Home</Link>
    </>
  );
}
