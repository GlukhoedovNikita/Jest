import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slice'

export const createStore = (initialState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: true,
    })

    return store
}

const store = createStore()

export const stateStore = store.getState()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
