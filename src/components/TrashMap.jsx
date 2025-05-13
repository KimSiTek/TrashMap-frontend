// src/components/TrashMap.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { fetchTrashBins } from '../api/trashApi';
import TrashInfoPanel from './TrashInfoPanel'; 
import FeedbackForm from './FeedbackForm'; // ✅ 추가
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '100vw',
  height: '80vh',
};

function TrashMap({ areaId }) {
  const [bins, setBins] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedBin, setSelectedBin] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrashBins().then((data) => {
      console.log("가져온 쓰레기통 목록:", data);
      setBins(data);
    });

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          console.error('위치 가져오기 실패:', err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }, []);
      
    return () => {
      // navigator.geolocation.clearWatch(watchId);
    };
  }, [map, areaId]);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const defaultCenter = { lat: 37.3898, lng: 126.9595 };

  return (
    <>
      {/* ✅ 피드백 버튼 */}
      <div style={{ textAlign: 'right', margin: '1rem' }}>
        <button onClick={() => navigate('/feedback')}>
          피드백 작성
        </button>
      </div>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          center={defaultCenter}
          onLoad={(mapInstance) => {
            setMap(mapInstance);
            // mapInstance.panTo(defaultCenter);
          }}
        >
          {userLocation && (
            <Marker
              position={userLocation}
              icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            />
          )}

          {bins.map((bin) => (
            <Marker
              key={bin.id}
              position={{ lat: bin.lat, lng: bin.lng }}
              icon={
                bin.status === 'full'
                  ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                  : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
              }
              onClick={() => setSelectedBin(bin)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedBin && (
        <TrashInfoPanel bin={selectedBin} onClose={() => setSelectedBin(null)} />
      )}

      {/* ✅ 피드백 폼 표시 */}
      {showFeedback && <FeedbackForm />}
    </>
  );
}

export default TrashMap;
