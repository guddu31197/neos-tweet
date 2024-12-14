import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentOnPost = createAsyncThunk(
  "/comment/fetch",
  async (data, thunkAPI) => {
    const { postId, token } = data;
    try {
      const { data } = await axios.get(`/api/comments/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      return data.comments;
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const postComment = createAsyncThunk(
  "/comment/post",
  async (data, thunkAPI) => {
    const { postId, token, text } = data;
    try {
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData: text,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data.comments.reverse();
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

const initialState = {
  error: null,
  commentList: null,
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentOnPost.pending]: (state) => {
      state.error = null;
      state.commentList = null;
    },
    [getCommentOnPost.fulfilled]: (state, action) => {
      state.error = null;
      state.commentList = action.payload;
    },
    [getCommentOnPost.rejected]: (state, action) => {
      state.error = action.payload;
      state.commentList = null;
    },
    [postComment.pending]: (state) => {
      state.error = null;
      state.commentList = null;
    },
    [postComment.fulfilled]: (state, action) => {
      state.error = null;
      state.commentList = action.payload;
    },
    [postComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.commentList = null;
    },
  },
});

export default commentSlice.reducer;
