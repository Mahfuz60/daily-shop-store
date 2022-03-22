import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404 Not Found!</h1>
      <Link to='/home'>Back To Home</Link>
    </div>
  );
};

export default NotFound;
