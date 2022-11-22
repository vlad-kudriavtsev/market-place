import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBasket = createAsyncThunk(
    'basket/get',
    async () => {
        return await fetch('http://localhost:3000/basket')
            .then(res => res.json())
    }
)

const getBasketFulfilled = (state, {payload}) => {
    state.basket = payload
}

export const basketExtraReducer = builder => {
    builder
        .addCase(getBasket.fulfilled, getBasketFulfilled)
}
