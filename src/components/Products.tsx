import React, { useState } from 'react';
import '../App.css'; 
import { Product } from '../types';

const Products = () => {
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 750 },
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;



  
  