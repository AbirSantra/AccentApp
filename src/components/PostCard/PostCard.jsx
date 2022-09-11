import React, { useState } from "react";
import "./PostCard.css";
import userImg from "../../images/profile1.jpg";
import { FaHeart, FaStar } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useEffect } from "react";
import { getUser } from "../../api/UserApi";
import { likePost } from "../../api/PostApi";
import { useDispatch, useSelector } from "react-redux";
import { savePost, unsavePost } from "../../redux/AuthSlice";

const PostCard = (post) => {
  const dispatch = useDispatch();

  // Get the current user id
  const currentUser = useSelector((state) => state.auth.authData.user);
  const currentUserId = currentUser._id;

  // Get the post details from props
  const { _id, image, userId, likes } = post.data;

  // Get the post user details
  const [postUser, setPostUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(userId);
      setPostUser(res.data);
    };
    fetchUser();
  }, [userId]);

  // To store the liked state of the post
  const [liked, setLiked] = useState(likes.includes(currentUserId));

  // To store the likes count of the post
  const [likesCount, setLikesCount] = useState(likes.length);

  // Function to handle like
  const handleLike = (e) => {
    e.preventDefault();
    likePost(_id, currentUserId);
    setLiked((prev) => !prev);
    liked
      ? setLikesCount((prev) => prev - 1)
      : setLikesCount((prev) => prev + 1);
  };

  // To store the saved state of the post
  const [saved, setSaved] = useState(currentUser.savedPosts.includes(_id));

  // Function to handle savepost
  const handleSavePost = (e) => {
    e.preventDefault();
    if (saved === true) {
      dispatch(unsavePost({ id: _id, userId: currentUserId }));
    } else if (saved === false) {
      dispatch(savePost({ id: _id, userId: currentUserId }));
    }
    setSaved((prev) => !prev);
  };

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
          <button
            onClick={handleLike}
            className={
              liked
                ? "post__options--icon post__options--icon--active"
                : "post__options--icon"
            }
          >
            <FaHeart />
            <p className="post__options--icon--count">{likesCount}</p>
            <span className="tooltipcard">
              <p className="tooltiptext">Like</p>
            </span>
          </button>
          <button
            onClick={handleSavePost}
            className={
              saved
                ? "post__options--icon post__options--icon--active"
                : "post__options--icon"
            }
          >
            <FaStar size={22} />
            <span className="tooltipcard">
              <p className="tooltiptext">Save</p>
            </span>
          </button>
          {currentUserId === userId && (
            <a href="/" className="post__options--icon">
              <BiDotsHorizontalRounded />
              <span className="tooltipcard">
                <p className="tooltiptext">Options</p>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
