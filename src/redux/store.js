//! This file contains the main redux store

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import UploadSlice from "./UploadSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    upload: UploadSlice,
  },
});
