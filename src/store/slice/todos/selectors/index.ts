import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const todosState = (state: RootState) => state.todos

const todosSelector = createSelector([todosState], (state) => state)

export default todosSelector
