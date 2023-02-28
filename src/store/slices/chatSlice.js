import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: "",
  messages: [],
  receiverId: "",
  chatOpen: false,
  receiverName: "",
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
      // console.log("chatSlice2");
      // console.log(payload);
      state.Id = payload;
    },
    setReceiverId: (state, { payload }) => {
      state.receiverId = payload;
    },
    setChatOpen: (state) => {
      state.chatOpen = true;
    },
    setChatClose: (state) => {
      state.chatOpen = false;
    },
    setReceiverName: (state, { payload }) => {
      state.receiverName = payload;
    },
  },
});

export const {
  setChatId,
  setChatMessages,
  addChatMessage,
  setReceiverId,
  setChatOpen,
  setReceiverName,
  setChatClose,
} = chatSlice.actions;
export default chatSlice.reducer;
