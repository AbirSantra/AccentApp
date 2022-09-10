import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { getUser } from "../../api/UserApi";
import ProfileImg from "../../images/profile1.jpg";
import "./FollowingsCardProfile.css";

const FollowingsCardProfile = ({ userId }) => {
  // Get the user details using id
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(userId);
      setUser(res.data);
    };
    fetchUser();
  }, [userId]);

  return (
    <div className="followingsCard__profile">
      <div className="followingsCard__profile--image">
        <img src={ProfileImg} alt="profileimage" />
      </div>
      <p className="followingsCard__profile--name">{user.username}</p>
      <a href="/" className="followingsCard__profile--options">
        <BiDotsHorizontalRounded size={22} />
      </a>
    </div>
  );
};

export default FollowingsCardProfile;
