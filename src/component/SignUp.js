import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassward] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    // console.warn(name, email, password, address, city, pincode);

    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password, address, city, pincode }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div className="container col-md-4">
      <h3 className="my-3 text-center">SignUp</h3>
      <div>
        <div className="form-row justify-content-evenly">
          <div className="form-group  my-2 ">
            <label htmlFor="inputAddress">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control mt-2"
              id="inputAddress"
              placeholder="Name"
            />
          </div>
          <div className="form-group  my-2 ">
            <label htmlFor="inputEmail4">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className=" mt-2 form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group  my-2 ">
            <label htmlFor="inputPassword4">Password</label>
            <input
              value={password}
              onChange={(e) => setPassward(e.target.value)}
              // type="password"
              className="mt-2 form-control"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-group  my-2 addheight mb-4">
          <label htmlFor="inputAddress2">Address </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="mt-2 form-control addheight"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group my-2 ">
            <label className="mt-3" htmlFor="inputCity">
              City
            </label>
            <input
              type="text"
              className="mt-2 form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group my-2 ">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose State ...</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Gujrat</option>
              <option>Uttarpradesh</option>
            </select>
          </div>
          <div className="form-group my-2 ">
            <label htmlFor="inputZip">Pin Code</label>
            <input
              type="text"
              className="mt-2 form-control"
              id="inputZip"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="mt-2 form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Accept T&C
            </label>
          </div>
        </div>
        <button
          onClick={collectData}
          type="submit"
          className="btn btn-primary my-2"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignUp;
