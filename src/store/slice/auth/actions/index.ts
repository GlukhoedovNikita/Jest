import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, IUserLogin } from '../interfaces'
import authService from '@services/auth'

export const authRegistration = createAsyncThunk(
    'auth/registration',
    async (user: IUser, { rejectWithValue }) => {
        try {
            const userUpdated = await authService.registration(user)
            return userUpdated
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

export const authLogin = createAsyncThunk(
    'auth/login',
    async (user: IUserLogin, { rejectWithValue }) => {
        try {
            const userUpdated = await authService.login(user)
            return userUpdated
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)
