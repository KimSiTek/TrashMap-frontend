// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import AdminPanel from './components/AdminPanel';
import InfoPage from './pages/InfoPage';
import FeedbackForm from './components/FeedbackForm';
import ValuePage from './pages/ValuePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapPage />} />
        <Route path ="/" element = {<HomePage />} />
        <Route path="/admin" element = {<AdminPanel/>} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/feedback" element = {<FeedbackForm />} />
        <Route path="/value" element = {<ValuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
