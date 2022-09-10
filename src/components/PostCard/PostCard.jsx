import React, { useState } from "react";
import "./PostCard.css";
import userImg from "../../images/profile1.jpg";
import { FaHeart, FaStar } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { useEffect } from "react";
import { getUser } from "../../api/UserApi";

const PostCard = (post) => {
  // Get the post details from props
  const { image, userId } = post.data;

  // Get the post user details
  const [postUser, setPostUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(userId);
      setPostUser(res.data);
    };
    fetchUser();
  }, [userId]);

  return (
    <div className="postcard__container">
      <div className="post__image">
        <img src={image} alt="postimg" />
      </div>
      <div className="post__details">
        <div className="post__userInfo">
          <div className="post__userImg">
            <img src={userImg} alt="userimage" />
          </div>
          <p className="post__username">{postUser.username}</p>
        </div>
        <div className="post__options">
          <a href="/" className="post__options--icon">
            <FaHeart />
            <span className="tooltipcard">
              <p className="tooltiptext">Like</p>
            </span>
          </a>
          <a href="/" className="post__options--icon">
            <BsChatDotsFill />
            <span className="tooltipcard">
              <p className="tooltiptext">Comment</p>
            </span>
          </a>
          <a href="/" className="post__options--icon">
            <FaStar size={22} />
            <span className="tooltipcard">
              <p className="tooltiptext">Save</p>
            </span>
          </a>
          <a href="/" className="post__options--icon">
            <BiDotsHorizontalRounded />
            <span className="tooltipcard">
              <p className="tooltiptext">Options</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
