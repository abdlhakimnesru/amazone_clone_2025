import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from "./ProductCard"; 
import classes from "./Product.module.css";
import Loader from '../Loader';

const Product = () => {
  const [products, setProducts] = useState([]); // ✅ start with []
  const [isLoading, setIsLoading] = useState(true); // ✅ true at start

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;
