import counterSelector from './index'
import { stateStore } from '@store/index'

describe('Counter Selector', () => {
    it('initialState', () => {
        const initialState = { ...stateStore, counter: { counter: 1 } }
        const resultState = { counter: 1 }
        expect(counterSelector(initialState)).toEqual(resultState)
    })
})
