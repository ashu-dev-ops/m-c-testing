import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userPageSlice";
import chatSlice from "./feature/chatSlice";


export const store = configureStore({
  reducer: {
    chat: chatSlice,
    user: userSlice,
  },
});
