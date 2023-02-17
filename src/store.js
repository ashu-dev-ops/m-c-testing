import { configureStore } from "@reduxjs/toolkit";
import chatPageSlice from "./feature/ChatPageSlice";
import user from "./feature/userPageSlice";
// import ChatPageSlice from "./feature/ChatPageSlice";
export const store = configureStore({
  reducer: {
    chatpage: chatPageSlice,
    user: user,
  },
});
