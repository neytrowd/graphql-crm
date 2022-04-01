import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuthUser {
    userId: String
}

const initialState: IAuthUser = {
    userId: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuthUser>) {
            state.userId = action.payload.userId
        },

        logout(state) {
            state.userId = ''
        }
    }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;