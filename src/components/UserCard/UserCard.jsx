import React from "react";
import "./UserCard.css";
import UserImagePlaceholder from "../../images/user image placeholder.jpg";
import { useSelector } from "react-redux";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  // Get the current user from the store
  const currentUser = useSelector((state) => state.auth.authData.user);

  // To store the followed state
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user._id)
  );

  const { username, firstname, lastname } = user;

  // Function to navigate to post page
  const handleUserPage = () => {
    navigate(`/profile/${user._id}`, { replace: true });
  };

  return (
    <div className="usercard">
      <div className="usercard--container">
        {/* Top Section */}
        <div className="usercard--profile" onClick={handleUserPage}>
          <div className="usercard--profile--image">
            <img
              src={user.profilePhoto ? user.profilePhoto : UserImagePlaceholder}
              alt={user.username}
            />
          </div>
          <div className="usercard--profile--info">
            <p className="usercard--username">{user.username}</p>
            <p className="usercard--name">
              {user.firstname} {user.lastname}
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="usercard--divider"></div>
        {/* Bottom Section */}
        <div className="usercard--action">
          {followed ? (
            <button className="usercard--followbtn usercard--followbtn--active">
              <FaCheck /> Following
            </button>
          ) : (
            <button className="usercard--followbtn">
              <FaPlus /> Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
