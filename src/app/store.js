//! This file contains the main redux store

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/Authpage/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
