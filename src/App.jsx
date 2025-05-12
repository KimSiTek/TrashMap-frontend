// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import AdminPanel from './components/AdminPanel';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapPage />} />
        <Route path ="/" element = {<HomePage />} />
        <Route path="/admin" element = {<AdminPanel/>} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
