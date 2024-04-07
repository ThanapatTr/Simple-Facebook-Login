import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Appp from './App';
import LandingPage from './LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appp />} />
        <Route path="/profile" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;
