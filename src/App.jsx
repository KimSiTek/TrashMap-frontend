// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>홈입니다. QR을 통해 접근해주세요.</div>} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
