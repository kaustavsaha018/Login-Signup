import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios").default;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signin", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);
        window.alert("Login Successful!");
        // console.log("Login Successful!");
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Invalid Credentials!");
        console.log("Invalid Credentials!");
      });
  };
  return (
    <>
      <h2 className="m-3 text-center">LOGIN PAGE</h2>
      <div className="col-md-6 mb-md-0 mb-2 mx-auto">
        <form method="POST" className="m-5" id="register-form">
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="submit"
              name="signin"
              className="btn btn-primary"
              id="signin"
              value="Login"
              onClick={loginUser}
            />
            <Link className="m-2" to="/signup">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
