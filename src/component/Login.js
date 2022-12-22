import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const [email, setEmail] = React.useState("");
  const [passward, setPassward] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handlelogin = async () => {
    // console.warn(email, passward);
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ email, passward }),
      headers: { "Content-Type": "application/json" },
    });
    // console.warn(result);
    result = await result.json();
    // console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please Enter Valid Details");
    }
  };

  return (
    <div className="container col-md-3 mt-4">
      <h3 className="text-center my-4">LogIn</h3>
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="form2Example1"
          className="form-control mb-2"
          placeholder="Email"
        />
        <label className="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input
          value={passward}
          onChange={(e) => {
            setPassward(e.target.value);
          }}
          type="password"
          id="form2Example2"
          className="form-control mb-2"
          placeholder="Passward"
        />
        <label className="form-label" for="form2Example2">
          Password
        </label>
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label className="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button
        onClick={handlelogin}
        type="button"
        className="btn btn-primary mb-4"
      >
        Login
      </button>

      {/* <!-- Register buttons --> */}
      <div className="text-center">
        <p>
          Not a member? <Link to="/signup">Register</Link>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
}

export default Login;
