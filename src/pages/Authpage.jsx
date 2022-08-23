import React, { useState } from "react";
import "../styles/Authpage.css";

const Authpage = () => {
  // local state to determine whether to show signup form for signin form
  const [isSignup, setIsSignup] = useState(false);

  // function to toggle the signup state
  const handleSignupToggle = () => {
    setIsSignup((prev) => !prev);
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
        <div className="auth--form--container">
          {isSignup && (
            <div className="auth--form--input">
              <input type="text" placeholder="First name" name="First name" />
            </div>
          )}
          {isSignup && (
            <div className="auth--form--input">
              <input type="text" placeholder="Last name" name="Last name" />
            </div>
          )}
          <div className="auth--form--input">
            <input type="text" placeholder="Username" name="Username" />
          </div>
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="Email address"
                name="Email address"
              />
            </div>
          )}
          <div className="auth--form--input">
            <input type="text" placeholder="Password" name="Password" />
          </div>
          {isSignup && (
            <div className="auth--form--input">
              <input
                type="text"
                placeholder="Confirm Password"
                name="Confirm Password"
              />
            </div>
          )}
        </div>
        {/* Button */}
        <button className="primary-btn auth--submit--btn">
          Create account
        </button>
      </div>
    </div>
  );
};

export default Authpage;
