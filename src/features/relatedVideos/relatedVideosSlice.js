import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRelatedVideos } from './relatedVideosApi';

const initialState = {
  relatedVideos: [],
  isLoading:false,
  isError:false,
  error:""
};

// async thunk ... 
export const relatedVideosAsync = createAsyncThunk(
  'relatedVideos/fetchRelatedVideos',
  async ({tags,id}) => {
    const relatedVideos = await fetchRelatedVideos({tags,id});
    return relatedVideos;
  }
);


export const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatedVideosAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(relatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.isError= false
      })
      .addCase(relatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError= true
        state.error = action.error?.message;
      });
  },
});


// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default relatedVideosSlice.reducer;