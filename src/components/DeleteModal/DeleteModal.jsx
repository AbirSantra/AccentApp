import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/PostSlice";
import { storage } from "../../firebase";
import { ref, deleteObject } from "firebase/storage";
import "./DeleteModal.css";

const DeleteModal = ({
  postId,
  postUserId,
  imageUrl,
  currentUserId,
  setDeleteModal,
}) => {
  const dispatch = useDispatch();

  // Function to delete image from firebase
  const deleteFromFirebase = (imageUrl) => {
    // Write firebase deletion logic here
    const imageRef = ref(storage, imageUrl);

    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted");
      })
      .catch((error) => console.log(error));
  };

  // Function to handle delete
  const handlePostDelete = (e) => {
    e.preventDefault();
    if (postUserId === currentUserId) {
      dispatch(deletePost({ id: postId, userId: currentUserId }))
        .unwrap()
        .then(() => {
          deleteFromFirebase(imageUrl);
        });
    } else {
      alert("Post Creator and Current User is not the same");
    }
  };

  return (
    <div className="deletemodal">
      <div className="deletemodal--container">
        <p className="deletemodal--message">
          Do you really want to delete this post? Post will be lost forever.
        </p>
        <div className="deletemodal--buttons">
          <button
            className="secondary-btn"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className="primary-btn deletemodal--deletebtn"
            onClick={handlePostDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
