//! This file contains all the redux logic for authentication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi";

const initialState = {
  authData: localStorage.getItem("profile")
    ? localStorage.getItem("profile")
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
      // console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
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
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut(state) {
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
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        localStorage.setItem("profile", JSON.stringify(action?.payload));
        state.authData = action.payload;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        localStorage.setItem("profile", JSON.stringify(action?.payload));
        state.authData = action.payload;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
