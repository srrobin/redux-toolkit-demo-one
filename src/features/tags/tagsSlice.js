import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTags } from './tagsApi';

const initialState = {
  tags: [],
  isLoading:false,
  isError:false,
  error:""
};

// async thunk ... 
export const tagsAsync = createAsyncThunk(
  'tags/fetchTags',
  async () => {
    const tags = await fetchTags();
    return tags;
  }
);


export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(tagsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(tagsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
        state.isError= false
      })
      .addCase(tagsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError= true
        state.error = action.error?.message;
      });
  },
});


// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default tagsSlice.reducer;