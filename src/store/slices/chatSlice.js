import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: "",
  messages: [],
};


const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    addChatMessage: (state, { payload }) => {
      console.log("chat message");
      console.log(payload);
      state.messages.push(payload);
    },
    setChatMessages: (state, { payload }) => {
      console.log("chatSlice");
      console.log(payload);
      state.messages = payload;
    },
    setChatId: (state, { payload }) => {
      console.log("chatSlice2");
      console.log(payload);
      state.Id = payload;
    }
  },
});

export const { setChatId, setChatMessages, addChatMessage} = chatSlice.actions;
export default chatSlice.reducer;
