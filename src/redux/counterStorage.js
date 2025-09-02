import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";

const counterStorage=configureStore({
    reducer:{
        //state updating reducer
        counterReducer : counterSliceReducer
    }
})

export default counterStorage