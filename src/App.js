import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CarouselEffect from './Components/Carousel/Carousel'; // match file name exactly
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default App;
