import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:4000/products");
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:4000/products/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  console.warn("product", products);
  return (
    <div className="product-list">
      <h3 className="text-center mt-4">Product List</h3>
      <div className="container">
        <ul id="first-ul">
          <li>Sr No</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
          <li>Operation</li>
        </ul>
        {products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button
                onClick={() => deleteProduct(item._id)}
                className="btn-sm btn-secondary"
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
