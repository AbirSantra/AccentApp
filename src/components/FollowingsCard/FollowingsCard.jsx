import React from "react";
import "./FollowingsCard.css";
import FollowingsCardProfile from "../FollowingsCardProfile/FollowingsCardProfile";

const FollowingsCard = ({ userData }) => {
  return (
    <div className="followingsCard__container">
      <h2 className="followingsCard__header">FOLLOWINGS</h2>
      <div className="followingsCard__list">
        {userData.map((user) => (
          <FollowingsCardProfile userId={user} key={user} />
        ))}
      </div>
      <div className="followingsCard__seemore">
        <a href="/profile">See all {">"}</a>
      </div>
    </div>
  );
};

export default FollowingsCard;
