import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{

        //these are reducer functions which act as actions
        //here,the parameter state is initial state
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}
        },
        increamentByAmount:(state,actionsByCounter)=>{
            state.count+=actionsByCounter.payload
        }
    }
})

export const {increment,decrement,reset,increamentByAmount}=counterSlice.actions
export default counterSlice.reducer