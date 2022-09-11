import React from "react";
import "./Profilepage.css";
import coverImg from "../../images/cover.jpg";
import profileImg from "../../images/profile1.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../api/UserApi";
// import { IoPersonAddSharp } from "react-icons/io5";

const Profilepage = () => {
  // Get the target user id from params
  const { id } = useParams();

  // Get the target user details
  const [targetUser, setTargetUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(id);
      setTargetUser(res.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div className="profilepage">
      <div className="profile__container container">
        {/* Profile Images Section */}
        <div className="profile--images--section">
          <div className="profile--images--cover--container">
            <img
              src={coverImg}
              alt="profile cover"
              className="profile--images--cover"
            />
          </div>
          <img
            src={profileImg}
            alt="profile display"
            className="profile--images--photo"
          />
        </div>
        {/* Profile Info Section */}
        <div className="profile--info--section">
          <h1 className="profile--info--name">
            {targetUser.firstname + " " + targetUser.lastname}
          </h1>
          <p className="profile--info--username">@{targetUser.username}</p>
          <p className="profile--info--headline">
            {targetUser.bio ? `${targetUser.bio}` : "No bio added"}
          </p>
          {/* Buttons */}
          <div className="profile--actions">
            <button className="primary-btn profile--actions--btn">
              Follow
            </button>
            <button className="secondary-btn profile--actions--btn">
              Message
            </button>
          </div>
          {/* Profile Stats */}
          <div className="profile--stats--section">
            <div className="profile--stat">
              <h2 className="profile--stat--num">1.2k</h2>
              <p className="profile--stat--label">Posts</p>
            </div>
            <div className="profile--stat">
              <h2 className="profile--stat--num">1.2k</h2>
              <p className="profile--stat--label">Followers</p>
            </div>
            <div className="profile--stat">
              <h2 className="profile--stat--num">1.2k</h2>
              <p className="profile--stat--label">Following</p>
            </div>
            <div className="profile--stat">
              <h2 className="profile--stat--num">1.2k</h2>
              <p className="profile--stat--label">Likes</p>
            </div>
            <div className="profile--stat">
              <h2 className="profile--stat--num">1.2k</h2>
              <p className="profile--stat--label">Accents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
