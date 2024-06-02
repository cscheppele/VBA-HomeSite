import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Winners from './components/Winners'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Winners/>
    </div>
  );
}

export default App;
