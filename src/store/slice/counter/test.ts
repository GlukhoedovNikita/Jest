import counterReducer, { increment, decrement } from './index'

describe('Counter Reducer', () => {
    it('increment', () => {
        const initialState = { counter: 1 }
        const resultState = { counter: 2 }
        expect(counterReducer(initialState, increment())).toEqual(resultState)
    })

    it('decrement', () => {
        const initialState = { counter: 0 }
        const resultState = { counter: -1 }
        expect(counterReducer(initialState, decrement())).toEqual(resultState)
    })
})
