// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map?id=tancheon01'); // 또는 원하는 ID로 설정 가능
  };

  const handleHowToUse = () => {
    navigate('/info'); // 사용법 페이지로 이동
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={handleHowToUse}>사용법</button> {/* 그냥 아무데나 추가 */}
      <h1>쓰레기 지도</h1>
      <button onClick={handleClick}>바로가기</button>
    </div>
  );
}

export default HomePage;
