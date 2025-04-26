import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import MyNav from './components/MyNav';
import Home from './pages/Home';
import UpComing from './pages/UpComing';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import NotFound from './pages/NotFound';
import MyFoot from './components/MyFoot';
import SearchResults from './pages/SearchResults';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('light-mode', !savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      document.body.classList.toggle('light-mode', !newMode);
      return newMode;
    });
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <MyNav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<UpComing />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <MyFoot />
      </Router>
    </div>
  );
}

export default App;
