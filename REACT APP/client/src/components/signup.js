import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
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

  const signup = () => {
    const { name, username, password } = user;
    if (name && username && password) {
      // console.log(username);
      // axios.post("http://43.206.117.90:5000/signup", user)
      axios
        .post("http://localhost:3001/signup", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => console.log("req error"));
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="main">
      <body>
        <div className="signup">
          <h2 style={{fontSize:"45px",margin:"0px 50px"}}>Sign up</h2>
          <br />
          <br />
          <h3 style={{fontSize:"25px"}}>Enter your credentials</h3>
          <br />
          <br />
          <div className="login-form">
          <label style={{fontSize:"20px"}}>Enter Your Name:</label>
          <br />
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Your Name"
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <label style={{fontSize:"20px"}}>Enter Username:</label>
            <br />
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              ></input>
              <br />
            <br />
            <label style={{fontSize:"20px"}}>Enter Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            ></input>
            <br />
            <br />
            <a href="/login" style={{textDecoration:"none"}}>existing user?</a>
            <br />
            <br />
            <button className="button" onClick={signup}>
              SIGNUP
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Register;