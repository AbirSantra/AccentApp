//! This file contains all the API calls related to Posts

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Api call for creating a post
export const uploadPost = (formData) => API.post("post/", formData);

// Api call for getting following posts
export const getFollowingPosts = (id) => API.get(`/post/${id}/followingPosts`);

// Api call for getting newest posts
export const getNewestPosts = () => API.get("post/newest");

// Api call for getting popular posts
export const getPopularPosts = () => API.get("post/popular");

// Api call for getting saved posts
export const getSavedPosts = (id) => API.get(`/post/${id}/savedPosts`);

// Api call for liking/unliking a post
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });

// Api call for unsaving a post
export const savePost = (id, userId) =>
  API.put(`post/${id}/save`, { userId: userId });

// Api call for unsaving a post
export const unsavePost = (id, userId) =>
  API.put(`post/${id}/unsave`, { userId: userId });

// Api call for deleting a post
export const deletePost = (id, userId) => API.delete(`post/${id}/${userId}`);

// Api call for editing a post
export const updatePost = (id, formData) => API.put(`post/${id}`, formData);
