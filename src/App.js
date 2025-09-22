import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CarouselEffect from './Components/Carousel/Carousel'; // match file name exactly

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
    </div>
  );
}

export default App;
