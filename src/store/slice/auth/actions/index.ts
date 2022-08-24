/* eslint-disable import/prefer-default-export */

import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../interfaces'
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
