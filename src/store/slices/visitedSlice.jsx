import { createSlice } from '@reduxjs/toolkit';

const visitedSlice = createSlice({
  name: 'visited',
  initialState: [],
  reducers: {
    addVisited: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addVisited } = visitedSlice.actions;

export const getAllVisited = () => (state) => state.visited;

export const getVisited = (name) => (state) =>
  state.visited.find(
    (p) => String(p.name).toLowerCase() === String(name).toLowerCase()
  ) || null;

export default visitedSlice.reducer;
