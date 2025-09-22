import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CarouselEffect from './Components/Carousel/Carousel'; // match file name exactly
import Category from './Components/Category/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
      <Category />
    </div>
  );
}

export default App;
