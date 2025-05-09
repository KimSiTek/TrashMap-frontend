// src/components/TrashMarker.jsx
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

function TrashMarker({ bin }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Marker
        position={{ lat: bin.lat, lng: bin.lng }}
        icon={
          bin.status === 'full'
            ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        }
        onClick={() => setShowInfo(true)}
      />
      {showInfo && (
        <InfoWindow
          position={{ lat: bin.lat, lng: bin.lng }}
          onCloseClick={() => setShowInfo(false)}
        >
          <div style={{color:'black', fontSize: '14px'}}>
            <h4 style={{color:'black'}}>쓰레기통 정보</h4>
            <p><strong>상태:</strong> {bin.status}</p>
            <p><strong>설명:</strong> {bin.description || '없음'}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default TrashMarker;
