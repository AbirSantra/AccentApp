import React, { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../api/UserApi";
import "./Comment.css";
import userImagePlaceholder from "../../images/user image placeholder.jpg";
import { Link } from "react-router-dom";

const Comment = ({ data }) => {
  // To store the user details
  const [postUser, setPostUser] = useState({
    username: "",
    profilePhoto: "",
  });

  // To fetch the user details
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(data.currentUserId);
      setPostUser(userData.data);
    };
    fetchUser();
  }, [data.currentUserId]);

  return (
    <div className="comment">
      <div className="comment--container">
        <Link to={`/profile/${postUser._id}`} className="comment--user--photo">
          <img
            src={
              postUser.profilePhoto
                ? postUser.profilePhoto
                : userImagePlaceholder
            }
            alt=""
          />
        </Link>
        <div className="comment--user--info">
          <Link
            to={`/profile/${postUser._id}`}
            className="comment--user--username"
          >
            {postUser.username}
          </Link>
          <p className="comment--user--text">{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
