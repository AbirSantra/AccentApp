import React from "react";
import "./Postpage.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../api/PostApi";
import { getUser } from "../../api/UserApi";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaHeart, FaStar, FaMoneyBill } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import userImagePlaceholder from "../../images/user image placeholder.jpg";
import moment from "moment";

const Postpage = () => {
  const navigate = useNavigate();

  // Get the post id from the params
  const { id } = useParams();

  // State for the post details
  const [postDetails, setPostDetails] = useState({});

  // State for the post user details
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      const { data } = await getPost(id);
      const postUserId = data.userId;
      const postUserDetails = await getUser(postUserId);
      setPostDetails(data);
      setPostUser(postUserDetails.data);
    };
    fetchPostDetails();
  }, [id]);

  // Function to navigate back to homepage
  const handleHomeButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(postDetails);

  return (
    <div className="postpage">
      <div className="container postpage--container">
        {/* Navigate to Home Button */}
        <div className="postpage--homebtn">
          <MdArrowBackIosNew />
          <button onClick={handleHomeButton}>Back</button>
        </div>

        {/* Post Image */}
        <div className="postpage--postImage">
          <img src={postDetails.image} alt="" />
        </div>

        {/* Post Buttons */}
        <div className="postpage--buttons">
          <button className="postpage--button">
            <FaHeart size={16} /> Like Post
          </button>
          <button className="postpage--button">
            <FaStar size={16} /> Add to Saved
          </button>
          <button className="postpage--button">
            <BsFillChatDotsFill size={16} /> Add a Comment
          </button>
          <button className="postpage--button">
            <AiFillDollarCircle size={18} /> Support creator
          </button>
        </div>

        {/* Post Title */}
        <h1 className="postpage--title">{postDetails.title}</h1>

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

          {/* Post Time */}
          <p className="postpage--user--postTime">
            Posted {moment(postDetails.createdAt).fromNow()}
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
