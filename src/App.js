import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Router>
        </main>
      </header>
    </div>
  );
}

export default App;
