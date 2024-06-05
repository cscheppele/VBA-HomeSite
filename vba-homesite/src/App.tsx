import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Winners from './components/Winners';
import Calendar from './components/Calendar';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Winners/>
      <Calendar/>
      <Board/>
    </div>
  );
}

export default App;
