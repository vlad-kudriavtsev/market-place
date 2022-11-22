import { createSlice } from "@reduxjs/toolkit";
import { basketExtraReducer } from "../thunks/basketThunk";

const initialState = {
    basket: []
}

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addBasket: (state, {payload}) => {
            state.basket.push(payload)
        }
    },
    extraReducers: builder => {
        basketExtraReducer(builder)
    }
}) 

export const {addBasket} = basketSlice.actions;

export const basketSelector = state => state.basketSlice.basket

export default basketSlice.reducer