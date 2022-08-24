import { createSlice } from '@reduxjs/toolkit'
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

    }
})

export default authSlice.reducer
