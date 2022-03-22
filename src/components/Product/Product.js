import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderProduct = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className='col-md-4 col-sm-6   mt-3' key={id}>
        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
          <div className='card my-3 mx-3' style={{ width: '18rem', height: '35rem' }}>
            <img src={image} className='card-img-center ' alt={title} style={{ width: '13rem' }} />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <h5 className='card-title'>$ {price}</h5>
              <h5 className='card-text'>{category}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderProduct} </>;
};

export default Product;
