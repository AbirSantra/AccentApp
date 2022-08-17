import React from "react";
import "../styles/ProfileCard.css";
import coverImg from "../images/cover.jpg";
import profileImg from "../images/profile1.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard__container">
      {/* DP and Banner */}
      <div className="profileCard__banner">
        <div className="profileCard__coverImg">
          <img src={coverImg} alt="profile cover" />
        </div>
        <div className="profileCard__profileImg">
          <img src={profileImg} alt="dp" />
        </div>
      </div>
      {/* Name, Username, Headline */}
      <div className="profileCard__info">
        <h1 className="profileCard__name">Abir Santra</h1>
        <p className="profileCard__username">@thedrummingfreak</p>
        <p className="profileCard__bio">
          FullStack Web Developer | Graphic Designer | Drummer | Gamer
        </p>
      </div>
      {/* Profile Stats */}
      <div className="profileCard__stats">
        <section className="profileCard__stat">
          <p className="stat__num">1.2K</p>
          <p className="stat__label">Followers</p>
        </section>
        <section className="profileCard__stat">
          <p className="stat__num">3.6K</p>
          <p className="stat__label">Followings</p>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
