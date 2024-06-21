import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchVideos} from './videosApi';

const initialState = {
  videos: [],
  isLoading:false,
  isError:false,
  error:""
};

// async thunk ... 
export const videosAsync = createAsyncThunk(
  'videos/fetchVideos',
  async ({ tags, search }) => {
    const videos = await fetchVideos( tags, search);
    return videos;
  }
);


export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(videosAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(videosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.isError= false
      })
      .addCase(videosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError= true
        state.error = action.error?.message;
      });
  },
});


// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default videosSlice.reducer;