import './App.css';
import React from 'react';
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
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/popular" element={<Popular/>} />
          <Route path="/top-rated" element={<TopRated/>} />
          <Route path="/upcoming" element={<UpComing/>} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <MyFoot />
      </Router>
    </div>
  );
}

export default App;
