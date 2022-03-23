import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../Product/Product';
import { SetProducts } from '../Redux/action/ProductAction';

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async (products) => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log('error', err);
    });
    dispatch(SetProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  console.log('productList:', products);
  return (
    <div className='container row mt-3'>
      <Product />
    </div>
  );
};

export default ProductList;
