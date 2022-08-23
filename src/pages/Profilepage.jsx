import React from "react";
import "../styles/Profilepage.css";
import coverImg from "../images/cover.jpg";
import profileImg from "../images/profile1.jpg";
import { IoPersonAddSharp } from "react-icons/io5";

const Profilepage = () => {
  return (
    <div className="profilepage">
      <div className="profile__container container">
        {/* Profile Header */}

        <div className="profile--header">
          <div className="profile--banner">
            <img src={coverImg} alt="profilebanner" />
          </div>
          <div className="profile--image">
            <img src={profileImg} alt="profileimage" />
          </div>
          <div className="profile--infosection">
            <div className="profile--userinfo">
              <h1 className="profile--name">Abir Santra</h1>
              <h2 className="profile--username">@drummingfreak</h2>
              <p className="profile--headline">
                FullStack Web Developer | Graphic Designer | Drummer | Gamer
              </p>
            </div>
            <button className="primary-btn profile--followbtn">
              <IoPersonAddSharp />
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
