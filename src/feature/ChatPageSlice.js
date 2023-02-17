import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  group: false,
  chats: true,
  search: false,
  currentChats: [],
};
const chatPageSlice = createSlice({
  name: "chatslice",
  initialState: initialState,
  reducers: {
    // handleChatSearch: (state, { payload: { name, value } }) => {
    //   console.log(name, value);
    //   state[name] = value;
    // },
    // decremented: state => {
    //   state.value -= 1
    // },
    decremented: (state) => {
      state.value -= 1;
    },
    handleChatSearch: (state) => {
      state.chats = false;
      state.search = true;
      state.group = false;
    },
    handleChatGroup: (state) => {
      state.chats = false;
      state.search = false;
      state.group = true;
    },
    handleChatPeople: (state) => {
      // console.log("running")
      state.chats = true;
      state.search = false;
      state.group = false;
    },
    setCurrentChats: (state, { payload }) => {
      // console.log(payload);
      state.currentChats = payload;
      // console.log(state.currentChats);
    },
  },
});
export const {
  handleChatGroup,
  handleChatPeople,
  handleChatSearch,
  setCurrentChats,
} = chatPageSlice.actions;
export default chatPageSlice.reducer;
