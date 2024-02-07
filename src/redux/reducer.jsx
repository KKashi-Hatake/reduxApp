import { createSlice } from "@reduxjs/toolkit";

export const counter=createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
    add:(state, action)=>{
        state.count+=action.payload;
    },
    remove:(state, action)=>{
        state.count-=action.payload;
    }
}
})

export const {add, remove} = counter.actions 
export default counter.reducer