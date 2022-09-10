//! This file contains all the API calls related to users

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Api call for getting a user
export const getUser = (id) => API.get(`/user/${id}`);
