import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../util/localStorage";
const initialState = {
  logIn: false,
    user: getUserFromLocalStorage()||{},
//   user: {},
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/auth/sign-up",
        user
      );
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    // return console.log(`logged in user ${JSON.stringify(user)}`);
    try {
      console.log("running");
      const resp = await axios.post(
        "http://localhost:3000/api/auth/sign-in",
        user
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }

    //   return loginUserThunk('/auth/login', user, thunkAPI);
  }
);
const userSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // incremented: (state) => {},
    // decremented: (state) => {},
    setLogIn: (state) => {
      state.logIn = true;
    },
    setLogInFalse: (state) => {
      state.logIn = false;
    },
    // setUser:(state,{payload:{name}})
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { data } = payload;
        console.log(data);
        state.logIn = true;
        console.log(data);
        // removeUserFromLocalStorage();
        addUserToLocalStorage(data);
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const data = payload;
        state.logIn = true;
        console.log(data);
        removeUserFromLocalStorage();
        addUserToLocalStorage(data);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(payload);
        // const data = payload;
        // state.logIn = true;
        // console.log(data);
        // removeUserFromLocalStorage();
        // addUserToLocalStorage(data);
      });
  },
});

export const { setLogIn, setLogInFalse } = userSlice.actions;

export default userSlice.reducer;
