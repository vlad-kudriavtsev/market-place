import { combineReducers } from "@reduxjs/toolkit";

import favouriteSlice from "./slices/favouriteSlice";
import basketSlice from "./slices/basketSlice";

export const rootReducer = combineReducers({
    favouriteSlice,
    basketSlice
})

