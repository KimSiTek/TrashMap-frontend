// src/pages/MapPage.jsx
import { useSearchParams } from 'react-router-dom';
import TrashMap from '../components/TrashMap';

function MapPage() {
  const [params] = useSearchParams();
  const areaId = params.get('id');

  if(!areaId) {
    return <div>접근 경로가 잘못되었습니다.</div>
  }

  return (
    <div>
      <h2 style = {{ textAlign: 'center', margineTop: '1rem'}}> 평촌 중앙공원 TrashMap </h2>
      <TrashMap areaId={areaId} />
    </div>
  );
}

export default MapPage;
