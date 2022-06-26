import React from "react"
import { useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const APIKEY = 'AIzaSyC7-PFigwWJ4vca_uLhDjlUOtXhUGwD4zo'


export function Map(props) {
  const [map, setMap] = React.useState(null)
  const containerStyle = {
    width: '1130px',
    height: '400px'
  };

  const center = {
    lat: props.lan,
    lng: props.lat,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: APIKEY
  })


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    map.fitBounds(bounds);
    map.setZoom(5)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {

    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        defaultZoom={3}
        minZoom={1}
        maxZoom={9}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </div >
  ) : <></>
}




