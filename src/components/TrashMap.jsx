// src/components/TrashMap.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const containerStyle = {
  width: '1000%',
  height: '80vh',
};

const dummyBins = [
  { id: 'bin1', lat: 37.4021, lng: 127.1083, status: 'available' },
  { id: 'bin2', lat: 37.4030, lng: 127.1090, status: 'full' },
];

function TrashMap({ areaId }) {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    setBins(dummyBins); // 나중엔 Spring API와 연결
  }, [areaId]);

  const center = dummyBins[0];

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={{ lat: bin.lat, lng: bin.lng }}
            icon={
              bin.status === 'full'
                ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            }
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default TrashMap;
