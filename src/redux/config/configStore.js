import { configureStore } from '@reduxjs/toolkit';
import feed from '../modules/feedSlice';
import comments from '../modules/commentsSlice';

const store = configureStore({
  reducer: { feed, comments },
});

export default store;
