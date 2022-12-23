import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhones = createAsyncThunk(
    'phones/get',
    async () => {
        return await fetch('http://localhost:3000/products')
            .then(res => res.json())
    }
)

const getPhonesFulfilled = (state, {payload}) => {
    state.phones = payload.phones
}

export const phonesExtraReducer = builder => {
    builder
        .addCase(getPhones.fulfilled, getPhonesFulfilled)
}
