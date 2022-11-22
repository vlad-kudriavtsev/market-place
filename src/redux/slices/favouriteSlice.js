import { createSlice } from "@reduxjs/toolkit";
import { favouritesExtraReducer } from "../thunks/favouritesThunks";

const initialState = {
    favourites: []
}

const favouriteSlice = createSlice({
    name: 'favouriteSlice',
    initialState,
    reducers: {
        addFavourite: (state, {payload}) => {
            state.favourites.push(payload)
        }
    },
    extraReducers: builder => {
        favouritesExtraReducer(builder)
    }
}) 

export const {addFavourite} = favouriteSlice.actions;

export const favouritesSelector = state => state.favouriteSlice.favourites

export default favouriteSlice.reducer