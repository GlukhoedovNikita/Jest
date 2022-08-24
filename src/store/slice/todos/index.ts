import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { todosFetch } from './actions'
import { ITodosState, ITodos } from './interafces'

const initialState: ITodosState = {
    loading: false,
    error: null,
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [todosFetch.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [todosFetch.fulfilled.type]: (state, action: PayloadAction<ITodos[]>) => {
            state.loading = false
            state.error = null
            state.todos = action.payload
        },
        [todosFetch.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default todosSlice.reducer
