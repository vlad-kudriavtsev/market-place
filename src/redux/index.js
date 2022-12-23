import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "./slices/productsSlice";
import phonesSlice from "./slices/phonesSlice";

export const rootReducer = combineReducers({
    productsSlice,
    phonesSlice
})

