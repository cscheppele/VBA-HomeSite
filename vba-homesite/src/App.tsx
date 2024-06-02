import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Winners from './components/Winners';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Winners/>
      <Calendar/>
    </div>
  );
}

export default App;
