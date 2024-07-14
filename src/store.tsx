import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice.tsx";

const store = configureStore({
    reducer: {
        'loginSlice': loginSlice
    }
})

export default store
export type IRootState = ReturnType<typeof store.getState>