import React from "react";
import "./Profilepage.css";
import coverImg from "../../images/cover.jpg";
import profileImg from "../../images/profile1.jpg";
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
          <div className="profile--image--section">
            <div className="profile--image">
              <img src={profileImg} alt="profileimage" />
            </div>
            <button className="primary-btn profile--followbtn">
              <IoPersonAddSharp />
              Follow
            </button>
          </div>
          <div className="profile--userinfo">
            <h1 className="profile--name">Abir Santra</h1>
            <h2 className="profile--username">@drummingfreak</h2>
            <p className="profile--headline">
              FullStack Web Developer | Graphic Designer | Drummer | Gamer
            </p>
            <div className="profile--user--stats">
              <div className="profile--stat">
                <p className="profile--stat--num">123</p>
                <p className="profile--stat--label">Posts</p>
              </div>
              <div className="profile--stat">
                <p className="profile--stat--num">1.2k</p>
                <p className="profile--stat--label">Likes</p>
              </div>
              <div className="profile--stat">
                <p className="profile--stat--num">23</p>
                <p className="profile--stat--label">Accents</p>
              </div>
              <div className="profile--stat">
                <p className="profile--stat--num">1.2k</p>
                <p className="profile--stat--label">Followers</p>
              </div>
              <div className="profile--stat">
                <p className="profile--stat--num">1.2k</p>
                <p className="profile--stat--label">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
