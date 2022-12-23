import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error] = React.useState(false);
  const params = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getProductDetails();
  });

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:4000/products/${params.id}`);
    result = await result.json();
    console.warn(result);

    setData(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.log(name, category, company, price);
  };

  return (
    <div>
      <div className="container col-md-4 mt-4">
        <h3 className="text-center my-4">Update Product</h3>

        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <input
            defaultValue={data.name}
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
            defaultValue={data.category}
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
            defaultValue={data.company}
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
            defaultValue={data.price}
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
          onClick={updateProduct}
          type="button"
          className="btn btn-primary mb-4"
        >
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
