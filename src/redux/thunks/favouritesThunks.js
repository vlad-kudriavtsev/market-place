import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavourites = createAsyncThunk(
    'favourites/get',
    async () => {
        return await fetch('http://localhost:3000/favourites')
            .then(res => res.json())
    }
)

const getFavouritesFulfilled = (state, {payload}) => {
    state.favourites = payload
}

export const favouritesExtraReducer = builder => {
    builder
        .addCase(getFavourites.fulfilled, getFavouritesFulfilled)
}
