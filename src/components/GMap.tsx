import React from 'react';
import mapStyles from '../utils/mapstyles';
import dynamic from 'next/dynamic';
import type {
  LoadScript as LoadScriptType,
  GoogleMap as GoogleMapType,
} from '@react-google-maps/api';

// Dynamically import the Google maps Components
const LoadScript = dynamic(() =>
  import('@react-google-maps/api').then((lib) => lib.LoadScript as any)
) as typeof LoadScriptType;

const GoogleMap = dynamic(() =>
  import('@react-google-maps/api').then((lib) => lib.GoogleMap as any)
) as typeof GoogleMapType;

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
