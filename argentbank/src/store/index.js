import { configureStore } from "@reduxjs/toolkit";

// redux slice
import authReducer from "../features/authSlice";

//  store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

export default store;
