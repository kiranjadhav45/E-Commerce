import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

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
      <div className="container  deleteButton">
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
            <li id="Operartion">
              <button className="mx-3" onClick={() => deleteProduct(item._id)}>
                <AiFillDelete />
              </button>
              <Link className="" to={"/update/" + item._id}>
                <FaRegEdit />
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
