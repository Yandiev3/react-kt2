import React from 'react';

const ProductItem = ({ product, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => {
      if (product.count < 25) {
        onIncrement(product.id);
      }
    };
  
    const handleDecrement = () => {
      if (product.count > 0) {
        onDecrement(product.id);
      }
    };
  
    const handleDoubleClick = () => {
      onDelete(product.id);
    };

  return (
    <div onDoubleClick={handleDoubleClick} style={{ border: '1px solid #ccc', width: '150px', display: 'flex'}}>
      <div style={{ padding: '20px',}}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Count: {product.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
    </div>
  );
};

export default ProductItem;