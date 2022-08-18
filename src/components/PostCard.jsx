import React from "react";
import "../styles/PostCard.css";
import postImg from "../images/post.jpg";
import userImg from "../images/profile1.jpg";
import { FaHeart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";

const PostCard = () => {
  return (
    <div className="postcard__container">
      <div className="post__image">
        <img src={postImg} alt="postimg" />
      </div>
      <div className="post__details">
        <div className="post__userInfo">
          <div className="post__userImg">
            <img src={userImg} alt="userimage" />
          </div>
          <p className="post__username">blackflash</p>
        </div>
        <div className="post__options">
          <a href="/" className="post__options--icon">
            <FaHeart />
          </a>
          <a href="/" className="post__options--icon">
            <BsChatDotsFill />
          </a>
          <a href="/" className="post__options--icon">
            <BiDotsHorizontalRounded size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;