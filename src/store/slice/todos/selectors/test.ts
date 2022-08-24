import { RootState, stateStore } from '@store/index'
import todosSelector from './index'

describe('Todos Selector', () => {
    it('initialState', () => {
        const initialState: RootState = {
            ...stateStore,
            todos: {
                loading: true,
                todos: [],
                error: 'Error',
            }
        }
        const resultState = { loading: true, todos: [], error: 'Error' }
        expect(todosSelector(initialState)).toEqual(resultState)
    })
})
