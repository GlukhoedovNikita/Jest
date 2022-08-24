/* eslint-disable import/prefer-default-export */

import { createAsyncThunk } from '@reduxjs/toolkit'
import todosService from '@services/todos'
import { AxiosError } from 'axios'

export const todosFetch = createAsyncThunk(
    'todos/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const todos = await todosService.get()
            return todos
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)
