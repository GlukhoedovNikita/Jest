import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authLogin, authRegistration } from './actions'
import { IAuthState, IUser } from './interfaces'

const initialState: IAuthState = {
    loading: false,
    error: null,
    isAuth: false,
    user: {} as IUser
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [authRegistration.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authRegistration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.loading = false
            state.error = null
            state.user = action.payload
        },
        [authRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
            state.isAuth = false
            state.user = {} as IUser
        },

        [authLogin.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.loading = false
            state.error = null
            state.user = action.payload
        },
        [authLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
            state.isAuth = false
            state.user = {} as IUser
        },
    }
})

export default authSlice.reducer
