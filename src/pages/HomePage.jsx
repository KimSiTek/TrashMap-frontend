// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map?id=tancheon01');
  };

  const handleHowToUse = () => {
    navigate('/info'); // '/info'는 사용법 페이지 경로라고 가정
  };

  return (
    <div style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}>
      {/* 우상단 사용법 버튼 */}
      <button
        onClick={handleHowToUse}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
        }}
      >
        사용법
      </button>

      <h1>Trash Map</h1>
      <button onClick={handleClick}>Garbage Location</button>
    </div>
  );
}

export default HomePage;
