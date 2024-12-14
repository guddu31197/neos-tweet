import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("/auth/users", async (thunkAPI) => {
    try {
      const { data } = await axios.get("api/users");
      return data.users;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  });
  
export const followUser = createAsyncThunk(
    "/user/follow",
    async ( data, thunkAPI) => {
  
      const {token, userId} = data;
      
      try {
        const {data} = await axios.post(
          `/api/users/follow/${userId}`,
          {},
          {
            headers: {
              authorization: token,
            },
          }
          );
        return data.users;
      } catch (error) {
        console.log({error})
        thunkAPI.rejectWithValue(error);
      }
    }
  );
  export const unFollowUser = createAsyncThunk("/user/follow", async (data, thunkAPI)=>{
    const {userId, token}= data
    try {
      const {data} = await axios.post(`/api/users/unfollow/${userId}`,{},
      {
        headers: {
          authorization: token,
        },
      });
      console.log(data)
      return data.users;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  })



const initialState = {
    allUsers: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [getAllUser.pending]: (state) => {
            
            state.error = null;
          },
          [getAllUser.fulfilled]: (state, action) => {
            state.allUsers = action.payload;
            state.error = null;
          },
          [getAllUser.rejected]: (state, action) => {
           
            state.error = action.error;
          },
          [followUser.pending]: (state) => {
            state.error = null;
          },
          [followUser.fulfilled]: (state, action) => {
            state.allUsers = action.payload;
            state.error = null;
          },
          [followUser.rejected]: (state, action) => {
            
            state.error = action.payload;
          },
          [unFollowUser.pending]: (state) => {
            
            state.error = null;
          },
          [unFollowUser.fulfilled]: (state, action) => {
            state.allUsers = action.payload;
            state.error = null;
          },
          [unFollowUser.rejected]: (state, action) => {
            
            state.error = action.payload;
          },
    
    }
})

export default userSlice.reducer;