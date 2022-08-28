//! This file contains all the redux logic for authentication

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi";

const initialState = {
  authData: null,
  loading: false,
  error: false,
};

//! Logging in User
export const logIn = createAsyncThunk("auth/logIn", async (formData) => {
  try {
    const { data } = await AuthApi.logIn(formData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

//! Registering a User
export const signUp = createAsyncThunk("auth/signUp", async (formData) => {
  try {
    const { data } = await AuthApi.signUp(formData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const counterSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
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
      });
  },
});

export default counterSlice.reducer;
