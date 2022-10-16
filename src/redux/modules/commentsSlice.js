import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByFeedId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const __getCommentsByFeedId = createAsyncThunk(
  'GET_COMMENTS_BY_FEED_ID',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.get(`/comments?feedId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    // FeedId로 댓글 조회
    [__getCommentsByFeedId.pending]: (state) => {
      state.commentsByFeedId.isLoading = true;
    },
    [__getCommentsByFeedId.fulfilled]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.data = action.payload;
    },
    [__getCommentsByFeedId.rejected]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
