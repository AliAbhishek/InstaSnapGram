import {configureStore} from "@reduxjs/toolkit"
import loginSlice from "./Slice/loginSlice"



// export const addEmailToStoreActions = loginSlice.actions


export const store = configureStore({
    reducer :{
        loginReducer:loginSlice.reducer,
        
    }
})