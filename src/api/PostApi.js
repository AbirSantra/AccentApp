//! This file contains all the API calls related to Posts

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Api call for creating a post
export const uploadPost = (formData) => API.post("post/", formData);
