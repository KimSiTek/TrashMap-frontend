// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map?id=tancheon01'); // 또는 원하는 ID로 설정 가능
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏡 Welcome to Trash Map</h1>
      <button onClick={handleClick}>Garbage Location</button>
    </div>
  );
}

export default HomePage;
