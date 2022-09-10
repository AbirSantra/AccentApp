//! This file contains all the redux logic for posts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PostApi from "../api/PostApi";

const initialState = {
  postData: [],
  loading: null,
  error: null,
  errorMessage: null,
  postsLoading: null,
  postsLoadingError: null,
};

export const uploadPost = createAsyncThunk(
  "post/uploadPost",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await PostApi.uploadPost(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getFollowingPosts = createAsyncThunk(
  "post/getFollowingPosts",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await PostApi.getFollowingPosts(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getPopularPosts = createAsyncThunk(
  "post/getPopularPosts",
  async () => {
    try {
      const { data } = await PostApi.getPopularPosts();
      return data;
    } catch (error) {
      return error?.response?.data?.message;
    }
  }
);

export const getNewestPosts = createAsyncThunk(
  "post/getNewestPosts",
  async () => {
    try {
      const { data } = await PostApi.getNewestPosts();
      return data;
    } catch (error) {
      return error?.response?.data?.message;
    }
  }
);

const PostSlice = createSlice({
  name: "post",
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
      })
      .addCase(getFollowingPosts.pending, (state, action) => {
        // if posts are loading, set loading to true
        state.postsLoading = true;
      })
      .addCase(getFollowingPosts.fulfilled, (state, action) => {
        // if posts have loaded, set post data to payload
        state.postData = action.payload;
        state.postsLoading = false;
      })
      .addCase(getFollowingPosts.rejected, (state, action) => {
        // if posts loading failed, set errors to true
        state.loading = false;
        state.postsLoadingError = action.payload;
      })
      .addCase(getNewestPosts.pending, (state, action) => {
        // if posts are loading, set loading to true
        state.postsLoading = true;
      })
      .addCase(getNewestPosts.fulfilled, (state, action) => {
        // if posts have loaded, set post data to payload
        state.postData = action.payload;
        state.postsLoading = false;
      })
      .addCase(getNewestPosts.rejected, (state, action) => {
        // if posts loading failed, set errors to true
        state.loading = false;
        state.postsLoadingError = action.payload;
      })
      .addCase(getPopularPosts.pending, (state, action) => {
        // if posts are loading, set loading to true
        state.postsLoading = true;
      })
      .addCase(getPopularPosts.fulfilled, (state, action) => {
        // if posts have loaded, set post data to payload
        state.postData = action.payload;
        state.postsLoading = false;
      })
      .addCase(getPopularPosts.rejected, (state, action) => {
        // if posts loading failed, set errors to true
        state.loading = false;
        state.postsLoadingError = action.payload;
      });
  },
});

export default PostSlice.reducer;
