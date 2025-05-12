// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map?id=tancheon01');
  };

  const handleHowToUse = () => {
    navigate('/info');
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // 세로 가운데
        alignItems: 'center',     // 가로 가운데
        backgroundColor: '#f8f8f8',
      }}
    >
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

      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Trash Map</h1>
      <button
        onClick={handleClick}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
      >
        Garbage Location
      </button>
    </div>
  );
}

export default HomePage;
