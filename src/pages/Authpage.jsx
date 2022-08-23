import React, { useState } from "react";
import "../styles/Authpage.css";

const Authpage = () => {
  // stores the initial form data
  const initialData = {
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  // local state to determine whether to show signup form for signin form
  const [isSignup, setIsSignup] = useState(false);

  // local state to store the form data
  const [data, setData] = useState(initialData);

  // function to toggle the signup state
  const handleSignupToggle = () => {
    setIsSignup((prev) => !prev);
  };

  // function to handle input change
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="authpage">
      <div className="container authpage--container">
        {/* Header */}
        <div className="auth--header">
          <p className="auth--subheading">
            {isSignup ? "It's free!" : "Welcome back!"}
          </p>
          <h1 className="auth--heading">
            {isSignup ? "Create new account" : "Log in to your account"}
          </h1>
          <p className="auth--method">
            {isSignup ? "Already got an account?" : "New here?"}{" "}
            <button className="auth--method--btn" onClick={handleSignupToggle}>
              {isSignup ? "Log in here" : "Create account here"}
            </button>
          </p>
        </div>
        {/* Form */}
        <form className="auth--form--container">
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                onChange={handleInputChange}
              />
            </div>
          )}
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="auth--form--input">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="Email address"
                name="emailaddress"
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="auth--form--input">
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={handleInputChange}
              />
            </div>
          )}
        </form>
        {/* Button */}
        <button className="primary-btn auth--submit--btn" type="submit">
          Create account
        </button>
      </div>
    </div>
  );
};

export default Authpage;
