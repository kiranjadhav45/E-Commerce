import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:4001/products");
    result = await result.json();
    setProducts(result);
  };

  console.warn("product", products);
  return (
    <div>
      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>item.name</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
