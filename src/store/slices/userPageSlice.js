import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
} from "../../util/localStorage";


const localStorageUser = getUserFromLocalStorage();

const initialState = {
    logIn: localStorageUser.token ? true : false,
    user: localStorageUser.user,
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
            if(error.response.data){
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
                "http://localhost:3000/api/auth/sign-in",
                user
            );
            return resp.data;
        } catch (error) {
            if(error.response.data){
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
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                console.log(payload);
                state.logIn = true;
                state.user = payload.user;
                addUserToLocalStorage(payload);
                toast.success("Welcome " + payload.user.userName, {
                    position: "bottom-right"
                })
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                let error;
                if(typeof payload === "object"){
                    //do something on error json
                    error = payload[Object.keys(payload)[0]];
                }
                else{
                    error = payload;
                }
                toast.error(error, {
                    position: "bottom-right"
                });
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log(payload);
                state.logIn = true;
                state.user = payload.user;
                removeUserFromLocalStorage();
                addUserToLocalStorage(payload);
                toast.success("Welcome " + payload.user.userName, {
                    position: "bottom-right"
                });
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                let error;
                if(typeof payload === "object"){
                    //do something on error json
                    error = payload[Object.keys(payload)[0]];
                }
                else{
                    error = payload;
                }
                toast.error(error, {
                    position: "bottom-right"
                });
            });
    },
});

export const { setLogIn, setLogInFalse } = userSlice.actions;

export default userSlice.reducer;
