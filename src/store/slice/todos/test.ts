import { AnyAction } from 'redux'
import { todosFetch } from './actions'
import todosReducer from './index'
import { ITodos, ITodosState } from './interafces'

describe('Todos slice', () => {
    describe('Todos slice fetch todos', () => {
        it('Todos slice fetch todos pending', () => {
            const action: AnyAction = { type: todosFetch.pending }
            const iniailState: ITodosState = { loading: false, error: null, todos: [] }
            const resultState: ITodosState = { loading: true, error: null, todos: [] }
            expect(todosReducer(iniailState, action)).toEqual(resultState)
        })

        it('Todos slice fetch todos fulfilled', () => {
            const todos: ITodos[] = [
                {
                    id: 1,
                    userId: 1,
                    title: 'title 1',
                    body: 'body 1'
                }
            ]
            const action: AnyAction = { type: todosFetch.fulfilled, payload: todos }
            const initialState: ITodosState = { loading: false, error: null, todos: [] }
            const resultState: ITodosState = { loading: false, error: null, todos }
            expect(todosReducer(initialState, action)).toEqual(resultState)
        })

        it('Todos slice fetch todos rejected', () => {
            const action: AnyAction = { type: todosFetch.rejected, payload: 'error' }
            const initialState: ITodosState = { loading: false, error: null, todos: [] }
            const resultState: ITodosState = { loading: false, error: 'error', todos: [] }
            expect(todosReducer(initialState, action)).toEqual(resultState)
        })
    })
})
