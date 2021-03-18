import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import mapStyles from '../utils/mapstyles';

const containerStyle = {
  width: '460px',
  height: '350px',
  borderRadius: '15px',
};

const center = {
  lat: 57.6889,
  lng: 12.0349,
};

const options = {
  styles: mapStyles,
  streetViewControl: false,
  maxZoom: 18,
  minZoom: 6,
};

function GMap() {
  return (
    <LoadScript
      preventGoogleFontsLoading={true}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GMap);
