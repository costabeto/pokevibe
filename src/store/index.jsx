import { configureStore } from '@reduxjs/toolkit';

import namesSlice from './slices/namesSlice';
import visitedSlice from './slices/visitedSlice';

export default configureStore({
  reducer: {
    names: namesSlice,
    visited: visitedSlice,
  },
});
