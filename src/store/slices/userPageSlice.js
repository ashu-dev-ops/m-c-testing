import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../util/localStorage";
// import { Navigate, useNavigate } from "react-router-dom";

const localStorageUser = getUserFromLocalStorage();

const initialState = {
  logIn: localStorageUser.token ? true : false,
  user: localStorageUser.user,
  isLoading: false,
  //   user: {},
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post(
        "https://mern-chat-back.onrender.com/api/auth/sign-up",
        user
      );
      return resp.data;
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
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
        // https://mern-chat-back.onrender.com/
        "https://mern-chat-back.onrender.com/api/auth/sign-in",
        user
      );
      return resp.data;
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
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
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.logIn = true;
        state.user = payload.user;
        state.isLoading = true;
        addUserToLocalStorage(payload);
        toast.success("Welcome " + payload.user.userName, {
          position: "bottom-right",
        });
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        let error;
        if (typeof payload === "object") {
          //do something on error json
          error = payload[Object.keys(payload)[0]];
        } else {
          error = payload;
        }
        toast.error(error, {
          position: "bottom-right",
        });
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.logIn = true;
        state.user = payload.user;
        removeUserFromLocalStorage();
        addUserToLocalStorage(payload);
        toast.success("Welcome " + payload.user.userName, {
          position: "bottom-right",
        });
        state.isLoading = false;
        // useNavigateFun("/chat-page");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        let error;
        if (typeof payload === "object") {
          //do something on error json
          error = payload[Object.keys(payload)[0]];
        } else {
          error = payload;
        }
        toast.error(error, {
          position: "bottom-right",
        });
      });
  },
});

export const { setLogIn, setLogInFalse } = userSlice.actions;

export default userSlice.reducer;
// export const useNavigateFun = ({ path }) => {
//   const navigate = useNavigate();
//   return navigate(path);
// };
