import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { renderToStaticMarkup } from "react-dom/server";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

// Create a Leaflet divIcon using the MUI LocationOn icon
const createMuiIcon = () =>
  L.divIcon({
    className: "custom-pin",
    html: renderToStaticMarkup(
      <LocationOnIcon
        style={{
          color: "red", // Pin color
          fontSize: "48px", // Adjust icon size here
        }}
      />
    ),
    iconSize: [32, 48], // Size in pixels
    iconAnchor: [16, 48], // Anchor position (middle bottom)
  });

const PharmacyMap: React.FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getPharmacies();
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>; // Replace this with a loader if needed
  }

  return (
    <MapContainer
      center={[48.2915, 25.9355]} // Центр карти (Чернівці)
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {store.pharmacies.map((pharmacy) => (
        <Marker
          key={pharmacy.id}
          position={[
            parseFloat(pharmacy.lat), // Convert lat to number
            parseFloat(pharmacy.lng), // Convert lng to number
          ]}
          icon={createMuiIcon()} // Use MUI icon
        >
          <Popup>
            <strong>{pharmacy.name}</strong>
            <br />
            {pharmacy.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default observer(PharmacyMap);
