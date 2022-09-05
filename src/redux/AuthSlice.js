//! This file contains all the redux logic for authentication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../api/AuthApi";

const initialState = {
  authData: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
  loading: false,
  error: false,
  errorMessage: null,
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
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
