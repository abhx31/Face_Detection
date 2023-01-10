import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      setLoginUser(res.data.user);
      console.log("send");
      navigate("/");
    });
  };

  return (
    <div className="main">

      <body>
        <div className="login-card">
          <h2 style={{fontSize:"45px",margin:"0px 60px"}}>Login</h2>
          <br />
          <br />
          <h3 style={{fontSize:"25px"}}>Enter your credentials</h3>
          <br />
          <br />
          <div className="login-form">
          <label style={{fontSize:"20px"}}>Enter Username:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              style={{margin:"8px -0.5px"}}
            ></input>
            <br />
            <label style={{fontSize:"20px"}}>Enter Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              style={{margin:"8px -0.5px"}}
              ></input>
              <br />
              <br />
            <a href="/signup" style={{textDecoration:"none"}}>Create account</a>
              <br />
              <br />
            <a href="/signup" style={{textDecoration:"none"}}>forgot password?</a>
              <br />
              <br />
            <button className="button" onClick={login}>
              LOGIN
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;