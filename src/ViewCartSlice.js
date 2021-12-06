import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

export const viewCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setViewCartState: (state) => {
            state.isOpen = state.isOpen ? false : true
        }
    }
})

export const {setViewCartState} = viewCartSlice.actions

export default viewCartSlice.reducer