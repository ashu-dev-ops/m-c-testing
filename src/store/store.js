import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userPageSlice";
import chatSlice from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    chat: chatSlice,
    user: userSlice,
  },
});
