// src/pages/ValuePage.jsx
import { useNavigate } from 'react-router-dom';

function ValuePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2>우리가 지키고 싶은 가치</h2>
      <p style={{ lineHeight: '1.8' }}>
        TrashMap은 <strong>“함께 만드는 공원, 함께 지키는 거리”</strong>를 이념으로 합니다.<br /><br />

        우리는 단순한 쓰레기 위치 안내를 넘어서, <br />
        <strong>시민과 행정이 함께 공공 공간을 지키는 참여형 시스템</strong>을 지향합니다.
      </p>

      <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
        <li>공동 책임: 모두의 거리를 함께 지킵니다</li>
        <li>실시간 참여: 시민이 직접 상태를 알립니다</li>
        <li>선순환: 쓰레기 없는 거리 = 우리가 만든 환경</li>
      </ul>

      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: '2rem' }}
      >
        돌아가기
      </button>
    </div>
  );
}

export default ValuePage;
