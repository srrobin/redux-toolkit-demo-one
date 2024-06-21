import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchVideo } from './videoApi';

const initialState = {
  video: {},
  isLoading:false,
  isError:false,
  error:""
};

// async thunk ... 
export const videoAsync = createAsyncThunk(
  'video/fetchVideo',
  async (id) => {
    const video = await fetchVideo(id);
    return video;
  }
);


export const videoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(videoAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(videoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
        state.isError= false
      })
      .addCase(videoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError= true
        state.error = action.error?.message;
      });
  },
});


// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default videoSlice.reducer;