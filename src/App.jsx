// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapPage />} />
        <Route path ="/" element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
