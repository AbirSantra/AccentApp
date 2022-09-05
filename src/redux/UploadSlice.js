//! This file contains all the redux logic for post upload

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PostApi from "../api/PostApi";

const initialState = {
  postData: [],
  loading: null,
  error: null,
  errorMessage: null,
};

export const uploadPost = createAsyncThunk(
  "upload/uploadPost",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await PostApi.uploadPost(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadPost.pending, (state, action) => {
        // if upload is pending, set loading to true
        state.loading = true;
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        // if upload successful, set the new post to postData
        state.postData.push(action.payload);
        state.loading = false;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        // if upload failed, set error to true and error message to error
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export default uploadSlice.reducer;
