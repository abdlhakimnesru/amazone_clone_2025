import React, { useState, useEffect } from 'react';
import classes from "./Results.module.css";
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Product from '../../Components/Product/Product'; // fix: uppercase component
import Category from '../../Components/Category/Category';
import { productUrl } from "../../Api/endPoint";

function Results () {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]); // run when category changes

  return (
    <LayOut>
      <div>Results</div>
      <div className={classes.results_container}>
        {results.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </LayOut>
  );
}

export default Results;







