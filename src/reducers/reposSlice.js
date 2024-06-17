// src/reducers/reposSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    repos: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchReposRequest: (state) => {
      state.loading = true;
    },
    fetchReposSuccess: (state, action) => {
      state.loading = false;
      state.repos = action.payload;
    },
    fetchReposFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchReposRequest, fetchReposSuccess, fetchReposFailure } = reposSlice.actions;
export default reposSlice.reducer;
