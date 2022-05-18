import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'names',
  initialState: [],
  reducers: {
    setNames: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { setNames } = nameSlice.actions;

export const getNames = () => (state) => state.names;

export default nameSlice.reducer;
