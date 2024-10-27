import React, { useState } from 'react';
import ProductItem from './ProductItem';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
  ]);

  const addProduct = () => {
    const productInfo = prompt('Введите название и цену товара (например, "Велосипед 1000"):');
    if (productInfo) {
      const [name, price] = productInfo.split(' ');
      const newProduct = {
        id: Date.now(),
        name,
        price: parseInt(price),
        count: 1,
      };
      setProducts([...products, newProduct]);
    }
  };

  const incrementCount = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, count: product.count + 1 } : product
    ));
  };

  const decrementCount = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const updatedCount = product.count - 1;
        return updatedCount === 0 ? null : { ...product, count: updatedCount };
      }
      return product;
    }).filter(Boolean));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <button onClick={addProduct}>Добавить товар</button>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
};

export default App;