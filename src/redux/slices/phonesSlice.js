import { createSlice } from "@reduxjs/toolkit";
import { phonesExtraReducer } from "../thunks/phonesThunk";

const initialState = {
    phones: []
}

const phonesSlice = createSlice({
    name: 'phonesSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        phonesExtraReducer(builder)
    }
}) 


export const phonesSelector = state => state.phonesSlice.phones

export default phonesSlice.reducer