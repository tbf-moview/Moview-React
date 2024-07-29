import {createSlice} from "@reduxjs/toolkit";
import {deleteCookie} from "../util/cookieUtil.tsx";

interface memberState {
    isLogin: boolean;
}

const initState: memberState = {
    isLogin: false
}

// export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => (param))

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        login: (_state, action) => {
            console.log('login')
            return {
                isLogin: action.payload.isLogin
            }
        },
        logout: () => {
            console.log('logout')
            deleteCookie('accessToken')
            deleteCookie('refreshToken')
            return {...initState}
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginPostAsync.fulfilled, (state, action) => {
    //             return {email: action.payload.email}
    //         })
    //         .addCase(loginPostAsync.pending, (state, action) => {
    //
    //         })
    //         .addCase(loginPostAsync.rejected, (state, action) => {
    //
    //         })
    // }
})

export const {login, logout} = loginSlice.actions;

export default loginSlice.reducer;