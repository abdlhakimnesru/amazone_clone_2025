import React, { useEffect, useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';

function ProductDetail() {
  const [product, setProduct] = useState(null); // start with null
  const { productId } = useParams();           // ✅ call useParams()

  useEffect(() => {
    if (!productId) return; // safety check

    axios.get(`${productUrl}/${productId}`)    // ✅ correct URL
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("AxiosError:", err);
      });
  }, [productId]); // ✅ add dependency

  return (
    <LayOut>
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>Loading product...</p>
      )}
    </LayOut>
  );
}

export default ProductDetail;
