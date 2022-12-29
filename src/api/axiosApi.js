import axios from "axios";
import { logOut } from "../redux/AuthSlice";

// Redux store access
let axiosStore;
export const setAxiosStore = (store) => {
	axiosStore = store;
};

const API = axios.create({
	baseURL: "http://localhost:5000",
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
});

API.interceptors.request.use(
	(config) => {
		const token = JSON.parse(localStorage.getItem("profile")).accessToken;
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

API.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {
		// Get the original query
		const originalQuery = err.config;

		if (err.response) {
			// Access Token has expired
			if (err.response.status === 403 && !originalQuery._retry) {
				// Set retry to true
				originalQuery._retry = true;

				try {
					// Get new access token
					const { data } = await API.get("/auth/refresh", {
						withCredentials: true,
					});

					// If new access token was returned by server
					if (data) {
						// Set the new authData
						localStorage.setItem("profile", JSON.stringify(data));
						// Update the header of the original query
						originalQuery.headers[
							"Authorization"
						] = `Bearer ${data.accessToken}`;
						// Retry the orignal query
						return API(originalQuery);
					}
				} catch (error) {
					// Refresh Token was expired or invalid. So logout.
					if (error.response.status === 401 && error.response.data) {
						axiosStore.dispatch(logOut());
						return Promise.reject(error);
					}
					return Promise.reject(error);
				}
			}
		}

		return Promise.reject(err);
	}
);

export default API;
