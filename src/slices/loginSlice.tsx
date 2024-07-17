import {createSlice} from "@reduxjs/toolkit";

const initState = {
    email: ''
}

// export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => (param))

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        login: (_state, action) => {
            console.log('login')
            return {email: action.payload.email}
        },
        logout: () => {
            console.log('logout')
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