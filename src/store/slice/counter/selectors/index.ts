import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const counterState = (state: RootState) => state.counter

const counterSelector = createSelector([counterState], (state) => state)

export default counterSelector
