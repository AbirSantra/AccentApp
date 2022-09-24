//! This file contains all the redux logic for authentication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../api/AuthApi";
import * as PostApi from "../api/PostApi";
import * as UserApi from "../api/UserApi";

const initialState = {
  authData: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
  loading: false,
  error: false,
  errorMessage: null,
  userUpdating: null,
  userUpdatingError: null,
};

//! Logging in User
export const logIn = createAsyncThunk(
  "auth/logIn",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await AuthApi.logIn(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  /* Call the api for the login with the form data. If login successful, return data. If login not successful (e.g-> Wrong password or username) return the error message */
);

//! Registering a User
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await AuthApi.signUp(formData);
      return data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
  /* Call the api for the login with the form data. If login successful, return data. If login not successful, (e.g -> Username or email already exists) return the error message */
);

//! Updating a user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, formdata }, { rejectWithValue }) => {
    try {
      await UserApi.updateUser(id, formdata);
      return { id, formdata };
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

//! Saving a post to user
export const savePost = createAsyncThunk(
  "auth/savePost",
  async ({ id, userId }, { rejectWithValue }) => {
    try {
      await PostApi.savePost(id, userId);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  /* Call the api for saving a post. If saving successful return the updated user. If error, return error message */
);

//! Unsaving a post from user
export const unsavePost = createAsyncThunk(
  "auth/unsavePost",
  async ({ id, userId }, { rejectWithValue }) => {
    try {
      await PostApi.unsavePost(id, userId);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut(state) {
      // clear the local storage, clear all states
      localStorage.clear();
      state.authData = null;
      state.loading = false;
      state.error = false;
      state.errorMessage = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.pending, (state, action) => {
        // if login is pending, set loading to true
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // if login is successfull, store user details in local storage, set authData to user details, set loading to false
        localStorage.setItem("profile", JSON.stringify(action?.payload));
        state.authData = action.payload;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        // if login is not successful, set loading to false, set error to true and set error message to the message returned
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(signUp.pending, (state, action) => {
        // if registration is pending, set loading to true
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        // if registration is successful, store user info in local storage, set authData to user info, set loading to false
        localStorage.setItem("profile", JSON.stringify(action?.payload));
        state.authData = action.payload;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        // if registration failed, set loading to false, set error to true, set error message to message returned
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        // if the user is updating, set loading to true
        state.userUpdating = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // if user update successfull
        state.userUpdating = false;
        const newUserData = {
          ...state.authData.user,
          ...action.payload.formdata,
        };
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.user = newUserData;
        localStorage.setItem("profile", JSON.stringify(profile));
        state.authData.user = newUserData;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.userUpdating = false;
        state.userUpdatingError = action.payload;
      })
      .addCase(savePost.pending, (state, action) => {
        // if saving is pending, set loading to true
        state.loading = true;
      })
      .addCase(savePost.fulfilled, (state, action) => {
        // if saving is successful, update the local storage profile item, update the authData store, set loading to false.
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.user.savedPosts.push(action.payload);
        localStorage.setItem("profile", JSON.stringify(profile));
        state.authData.user.savedPosts.push(action.payload);
        state.loading = false;
      })
      .addCase(savePost.rejected, (state, action) => {
        // if saving fails, set loading to false, error to true and return error message
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(unsavePost.pending, (state, action) => {
        // if unsaving is pending, set loading to true
        state.loading = true;
      })
      .addCase(unsavePost.fulfilled, (state, action) => {
        // if unsaving is successful, update the local storage profile item, update the authData store, set loading to false.
        const newSavedPosts = state.authData.user.savedPosts.filter(
          (postId) => postId !== action.payload
        );
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.user.savedPosts = newSavedPosts;
        localStorage.setItem("profile", JSON.stringify(profile));
        state.authData.user.savedPosts = newSavedPosts;
        state.loading = false;
      })
      .addCase(unsavePost.rejected, (state, action) => {
        // if unsaving fails, set loading to false, error to true and return error message
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
