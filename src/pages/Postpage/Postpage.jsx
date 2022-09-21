import React from "react";
import "./Postpage.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../api/UserApi";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import userImagePlaceholder from "../../images/user image placeholder.jpg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPost, likePost } from "../../api/PostApi";
import { savePost, unsavePost } from "../../redux/AuthSlice";

const Postpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get current user from the store
  const currentUser = useSelector((state) => state.auth.authData.user);

  // Get the post id from the params
  const { id } = useParams();

  // To store the post details
  const [postDetails, setPostDetails] = useState({
    title: "",
    desc: "",
    likes: [],
    comments: [],
  });

  // To store the user details
  const [postUser, setPostUser] = useState({
    username: "",
    followers: [],
    following: [],
  });

  // To store the liked stated of the post
  const [liked, setLiked] = useState(
    postDetails.likes.includes(currentUser._id)
  );

  // To store the likes count of the post
  const [likes, setLikes] = useState(postDetails.likes.length);

  // To store the saved post state
  const [saved, setSaved] = useState(currentUser.savedPosts.includes(id));

  // Set the post and user details as soon as the page loads
  useEffect(() => {
    const fetchDetails = async () => {
      const postData = await getPost(id);
      const userData = await getUser(postData.data.userId);
      setPostDetails(postData.data);
      setPostUser(userData.data);
      setLiked(postData.data.likes.includes(currentUser._id));
      setLikes(postData.data.likes.length);
    };
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Function to navigate back to homepage
  const handleHomeButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // Function to handle like
  const handleLike = (e) => {
    e.preventDefault();
    likePost(id, currentUser._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  // Function to handle save post
  const handleSavePost = (e) => {
    e.preventDefault();
    if (saved === true) {
      dispatch(unsavePost({ id: id, userId: currentUser._id }));
    } else if (saved === false) {
      dispatch(savePost({ id: id, userId: currentUser._id }));
    }
    setSaved((prev) => !prev);
  };

  return (
    <div className="postpage">
      <div className="container postpage--container">
        {/* Navigate to Home Button */}
        <div className="postpage--homebtn">
          <MdArrowBackIosNew />
          <button onClick={handleHomeButton}>Back</button>
        </div>

        {/* Post Title */}
        <h1 className="postpage--title">{postDetails.title}</h1>

        {/* Post Image */}
        <div className="postpage--postImage">
          <img src={postDetails.image} alt={postDetails.image} />
        </div>

        {/* Post Buttons */}
        <div className="postpage--buttons">
          <button
            className={
              liked
                ? "postpage--button postpage--button--active"
                : "postpage--button"
            }
            onClick={handleLike}
          >
            <FaHeart size={16} /> {liked ? "Liked" : "Like Post"}
          </button>
          <button
            className={
              saved
                ? "postpage--button postpage--button--active"
                : "postpage--button"
            }
            onClick={handleSavePost}
          >
            <FaStar size={16} /> {saved ? "Saved" : "Add to Saved"}
          </button>
          <button className="postpage--button">
            <BsFillChatDotsFill size={16} /> Add a Comment
          </button>
          <button className="postpage--button">
            <AiFillDollarCircle size={18} /> Support creator
          </button>
        </div>

        {/* Post User */}
        <div className="postpage--user">
          {/* User Image */}
          <div className="postpage--user--image">
            <img
              src={postUser.image ? postUser.image : userImagePlaceholder}
              alt=""
            />
          </div>

          {/* Username */}
          <p className="postpage--user--username">{postUser.username}</p>

          {/* Follow Button */}
          <button className="postpage--user--followbtn">
            <FaPlus size={10} /> Follow
          </button>
        </div>

        {/* Post Stats */}
        <div className="postpage--stats">
          <p className="postpage--user--postTime">
            Posted {moment(postDetails.createdAt).fromNow()}
          </p>
          <p className="postpage--stat">
            <FaHeart /> {likes} Likes
          </p>
          <p className="postpage--stat">
            <BsFillChatDotsFill /> {postDetails.comments.length} Comments
          </p>
        </div>

        {/* Post Description */}
        <div className="postpage--desc">{postDetails.desc}</div>
        {/* Comments Section */}
      </div>
    </div>
  );
};

export default Postpage;
