import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags:[],
  search:"" 
};



 const filterSlice = createSlice({
  name: 'video',
  initialState,
  reducers:{
    tagSelected:(state,action) => {
        state.tags.push(action.payload);    
    },
    
    tagRemoved:(state,action) => {
        const indexToRemoved = state.tags.indexOf(action.payload); 
        
        if(indexToRemoved !== -1){
           state.tags.splice(indexToRemoved,1);
        }
    },
    
    searched:(state,action) => {
        state.search = action.payload
    }
  }
});


// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;