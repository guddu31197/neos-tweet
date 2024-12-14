import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (thunkAPI) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "/post/create",
  async (data, thunkAPI) => {
    const { text, encodedToken } = data;
    try {
      const res = await axios.post(
        "/api/posts",
        { postData: text },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/post/delete",
  async (data, thunkAPI) => {
    const { token, postId } = data;
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      toast.error("Post deleted successfully");
      return data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "/post/like",
  async (data, thunkAPI) => {
    const { postId, token } = data;
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.success("Post liked successfully");
      return data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "/post/dislike",
  async (data, thunkAPI) => {
    const { token, postId } = data;
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.error("Post disliked successfully");
      return data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "/posts/edit",
  async (data, thunkAPI) => {
    const { postId, editedText, token } = data;

    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData: editedText },
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.success("Post edited successfully");
      return data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  error: null,
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },

    [fetchPost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [createPost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [createPost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [createPost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [deletePost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [likePost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [likePost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [likePost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [dislikePost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [dislikePost.rejected]: (state, action) => {
      state.error = action.payload;
      state.posts = null;
    },
    [editPost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [editPost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.error = action.payload;
      state.posts = null;
    },
  },
});

export default postSlice.reducer;
