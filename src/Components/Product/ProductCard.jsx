import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;

  return (

          
    <div className={classes.card_container}>
      {/* Image */}
      <img src={image} alt={title} />

      {/* Product Info */}
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
