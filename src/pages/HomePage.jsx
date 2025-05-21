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
    <div style={{ padding: '2rem' }}>
      <button onClick={handleHowToUse}>사용법</button> 
      <h1>TrashMap</h1>
      <button onClick={handleClick}>바로가기</button>
    </div>
  );
}

export default HomePage;
