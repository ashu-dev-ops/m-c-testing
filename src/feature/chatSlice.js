import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  logIn: false,
  user: "",
  chats: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    setChatFromReducer: (state, { payload: { data } }) => {
      console.log(data);
      state.chats = [data];
    },
  },
});

export const { incremented, decremented , setChatFromReducer} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
