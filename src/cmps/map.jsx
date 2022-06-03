import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <_Map />;
}

function _Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

