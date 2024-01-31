import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data: "",
   
}

const loginSlice = createSlice({
    name:"loginSlice",
    initialState,
    reducers:{
        addEmailToStore:(state,{payload})=>{
            console.log(payload)
            state.data=payload

        },
        

    }

})

export const {addEmailToStore}=loginSlice.actions

export default loginSlice