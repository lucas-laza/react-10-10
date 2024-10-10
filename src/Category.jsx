import React, { useRef } from 'react';
import { Product } from './Product';

const Category = () => {
  const inputRef = useRef(null);

  const categories = [
    { id: 1, name: 'Fruits', products: ['Pomme', 'Banane', 'Orange'] },
    { id: 2, name: 'Légumes', products: ['Carotte', 'Tomate', 'Concombre'] },
  ];

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          {category.products.map((product, index) => (
            <Product key={index} ref={inputRef} name={product} />
          ))}
        </div>
      ))}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default Category;
