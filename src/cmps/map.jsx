import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

export function Map(props) {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyC7-PFigwWJ4vca_uLhDjlUOtXhUGwD4zo">
        <GoogleMap
          zoom={14}
          center={{ lat: props.lan, lng: props.lat }}
          mapContainerClassName="map-container"
        >
          <Marker position={{ lat: props.lan, lng: props.lat }} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
