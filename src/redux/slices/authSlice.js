import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/login", userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    const { userName, firstName, lastName, password } = userData;
    try {
      const res = await axios.post("/api/auth/signup", {
        username: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
        // coverphoto: null,
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  encodedToken: JSON.parse(localStorage.getItem("encodedToken")),
  error: null,
  isAuthenticated: false,
  allUsers: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.encodedToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("encodedToken");
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.user = null;
      state.encodedToken = null;
      state.isAuthenticated = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = { ...action.payload?.foundUser, password: "************" };
      state.encodedToken = action.payload?.encodedToken;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("encodedToken", JSON.stringify(state.encodedToken));
      state.isAuthenticated = true;
    },
    [login.rejected]: (state, action) => {
      state.user = null;
      state.encodedToken = null;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    [signup.pending]: (state) => {
      state.user = null;
      state.encodedToken = null;
      state.isAuthenticated = false;
    },
    [signup.fulfilled]: (state, action) => {
      state.user = { ...action.payload?.createdUser, password: "************" };
      state.encodedToken = action.payload?.encodedToken;
      localStorage.setItem("user", JSON.stringify(action.payload.createdUser));
      localStorage.setItem(
        "encodedToken",
        JSON.stringify(action.payload.encodedToken)
      );
      state.isAuthenticated = true;
    },
    [signup.rejected]: (state, action) => {
      state.user = null;
      state.encodedToken = null;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
