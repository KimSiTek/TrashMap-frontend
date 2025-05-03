// src/components/TrashMap.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { fetchTrashBins } from '../api/trashApi';

const containerStyle = {
  width: '100vw',
  height: '80vh',
};

function TrashMap({ areaId }) {
  const [bins, setBins] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    
    const watchId = navigator.geolocation.watchPosition(
        (position) => {
            const current = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            setUserLocation(current);
            if(map){
                map.panTo(current);
            }
        },
        (error) => {
            console.error('실시간 위치 추적 실패:', error);
        },

        {
            enableHighAccuracy : true,
            timeout: 5000,
            maximumAge: 0,
        }
    );

    fetchTrashBins().then(setBins);

    return () => {
        navigator.geolocation.clearWatch(watchId);
    };
  }, [map,areaId]);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const defaultCenter = {lat : 37.4, lng: 127.1};

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} 
                    center={userLocation || defaultCenter}
                    zoom={15}
                    onLoad = {handleMapLoad} >
                    
                    {userLocation && (
                        <Marker
                            position = {userLocation}
                            icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                        />
                    )}

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
