import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = myFilterSlice.actions;

export const getFilter = state => state.filter;
