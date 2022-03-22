import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SelectedProduct, RemoveSelectedProduct } from '../Redux/action/ProductAction';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const { id, title, image, category, price, description } = product;

  const fetchSelectedProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log('error', err);
    });

    dispatch(SelectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchSelectedProduct();
    }
  }, [fetchSelectedProduct]);

  const handleRemoveProduct = () => {
    return dispatch(RemoveSelectedProduct({}));
  };
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>loading.......</div>
      ) : (
        <div className='row-md-8 row-sm-10   mt-3'>
          <div className='card my-3 mx-3'>
            <img src={image} className='card-img-center ' alt={title} style={{ width: '400px', height: '400px' }} />

            <div className='card-body'>
              <h5 className='card-title'>ProductId is: {id}</h5>
              <h5 className='card-title'>{title}</h5>
              <h5 className='card-title'>Price $ {price}</h5>
              <h5 className='card-text'>Category: {category}</h5>
              <p className='card-text'>{description}</p>
              <button className='btn btn-danger me-2'>Add Cart</button>
              <button className='btn btn-warning' onClick={handleRemoveProduct}>
                Remove Item
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
