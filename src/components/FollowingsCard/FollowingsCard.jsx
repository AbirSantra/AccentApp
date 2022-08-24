import React from "react";
import ProfileImg from "../../images/profile1.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./FollowingsCard.css";

const FollowingsCard = () => {
  return (
    <div className="followingsCard__container">
      <h2 className="followingsCard__header">FOLLOWINGS</h2>
      <div className="followingsCard__list">
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
        <div className="followingsCard__profile">
          <div className="followingsCard__profile--image">
            <img src={ProfileImg} alt="profileimage" />
          </div>
          <p className="followingsCard__profile--name">blackflash</p>
          <a href="/" className="followingsCard__profile--options">
            <BiDotsHorizontalRounded size={22} />
          </a>
        </div>
      </div>
      <div className="followingsCard__seemore">
        <a href="/">See all {">"}</a>
      </div>
    </div>
  );
};

export default FollowingsCard;
