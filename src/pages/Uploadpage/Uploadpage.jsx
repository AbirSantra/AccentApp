import React from "react";
import { useSelector } from "react-redux";
import "./Uploadpage.css";

const Uploadpage = () => {
  // Get user details from redux store
  const user = useSelector((state) => state.auth.authData);
  const name = user.existingUser.firstname;

  return (
    <div className="uploadpage">
      <div className="container uploadpage--container">
        {/* Page Header */}
        <h1 className="uploadpage--heading">
          Created something new, <span>{name}</span>?
        </h1>
        {/* Form */}
        <div className="uploadpage--form--container">
          <div className="upload--form--input">
            <input
              type="text"
              placeholder="Let's add some description"
              name="desc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadpage;
