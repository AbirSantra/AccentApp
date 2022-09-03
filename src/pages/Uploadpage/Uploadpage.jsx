import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./Uploadpage.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Uploadpage = () => {
  // Get user details from redux store
  const user = useSelector((state) => state.auth.authData);
  const name = user.existingUser.firstname;

  // State to store the selected image
  const [uploadImage, setUploadImage] = useState(null);

  // Reference to upload image input
  const imageRef = useRef();

  // Function to set the image
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setUploadImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="uploadpage">
      <div className="container uploadpage--container">
        <div className="upload--form--container">
          {/* Form Header */}
          <h1 className="upload--form--header">Upload Post</h1>
          <p className="upload--form--subheading">
            Created something new, <span>{name}</span>? Share it with the world
            now!
          </p>
          {/* Form Body */}
          <form className="upload--form--body">
            {/* Title */}
            <div className="upload--form--input">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                placeholder="Give your post a title"
                name="title"
                id="title"
              />
            </div>

            {/* Description */}
            <div className="upload--form--input">
              <label htmlFor="desc">Description: </label>
              <textarea
                placeholder="Add some description"
                className="upload--form--input--field"
                name="desc"
                rows="auto"
                id="desc"
              />
            </div>

            {/* Tags */}
            <div className="upload--form--input">
              <label htmlFor="tags">Tags: </label>
              <input
                type="text"
                placeholder="Add a few relevant tags (comma separated)"
                name="tags"
                id="tags"
              />
            </div>

            {/* Photo Browse */}
            {!uploadImage && (
              <div className="upload--form--file--container">
                <div
                  className="upload--form--file"
                  onClick={() => imageRef.current.click()}
                >
                  <p>Click here to browse images</p>
                  <p>16:9 aspect ratio recommended. Max size: 5mb</p>
                </div>
              </div>
            )}

            {/* Image Preview */}
            {uploadImage && (
              <div className="upload--form--preview">
                <AiFillCloseCircle
                  className="upload--form--preview--closeBtn"
                  onClick={() => setUploadImage(null)}
                />
                <div className="upload--form--preview--image">
                  <img src={uploadImage.image} alt="uploadImage" />
                </div>
              </div>
            )}

            {/* Image Input */}
            <div className="upload--form--imageInput">
              <input
                type="file"
                name="uploadImage"
                id="uploadImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>

            {/* <div className="upload--form--confirm">
              <input type="checkbox" name="confirm" id="confirm" />
              <label htmlFor="confirm">
                I confirm that this post is my own creation.
              </label>
            </div> */}

            {/* Submit Button */}
            <button className="primary-btn upload--submit--btn" type="submit">
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Uploadpage;
