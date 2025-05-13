// src/pages/InfoPage.jsx

import { useNavigate } from 'react-router-dom';

function InfoPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>TrashMap 사용법 안내</h1>
      <ul style={{ lineHeight: '2' }}>
        <li>서비스를 실행하면, 구글맵과 현재위치가 뜹니다.</li>
        <li>쓰레기통의 위치와 상태를 지도로 확인할 수 있습니다.</li>
        <li>각 쓰레기통 마커를 클릭하면 상세 정보를 볼 수 있습니다.</li>
        <li>상태가 잘못된 경우 "쓰레기통 상태 신고" 버튼을 눌러 사진을 업로드할 수 있습니다.</li>
        <li>문제 발생 시 하단 피드백 제출 기능을 통해 의견을 남길 수 있습니다.</li>
      </ul>

      <button
        onClick={goBack}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
        }}
      >
        ⬅ 돌아가기
      </button>
    </div>
  );
}

export default InfoPage;
