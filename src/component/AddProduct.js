import React from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const handleOnSubmit = async () => {
    if (!name || !category || !company || !price) {
      setError(true);
      return false;
    }

    // console.warn(name, category, company, price);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.warn(userId);

    let result = await fetch("http://localhost:4000/add-product", {
      method: "post",
      body: JSON.stringify({ name, category, company, price }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    navigate("/products");

    // console.warn(result);
  };

  return (
    <div>
      <div className="container col-md-4 mt-4">
        <h3 className="text-center my-4">Add Product</h3>

        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="form2Example1"
            className="form-control mb-2"
            placeholder="Product Name"
          />
          <label className="form-label" for="form2Example1">
            Product Name
            {error && !name && (
              <span className="invalidinput mx-4">Enter Valid Name</span>
            )}
          </label>
        </div>

        {/* <!-- category input --> */}
        <div className="form-outline mb-4">
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            id="form2Example2"
            className="form-control mb-2"
            placeholder="Category"
          />
          <label className="form-label" for="form2Example2">
            Product Category
            {error && !category && (
              <span className="invalidinput mx-4">Enter Valid Category</span>
            )}
          </label>
        </div>

        {/* <!-- Company input --> */}
        <div className="form-outline mb-4">
          <input
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            id="form2Example2"
            className="form-control mb-2"
            placeholder="Company Name"
          />
          <label className="form-label" for="form2Example2">
            Product Company / Discription
            {error && !company && (
              <span className="invalidinput mx-4">Enter Valid Discription</span>
            )}
          </label>
        </div>

        {/* <!-- Price input --> */}
        <div className="form-outline mb-4">
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="Number"
            id="form2Example2"
            className="form-control mb-2"
            placeholder="Price"
          />
          <label className="form-label" for="form2Example2">
            Product Price
            {error && !price && (
              <span className="invalidinput mx-4">Enter Valid Price</span>
            )}
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button
          onClick={handleOnSubmit}
          type="button"
          className="btn btn-primary mb-4"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
