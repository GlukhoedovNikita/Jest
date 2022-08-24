import { createStore, stateStore } from '@store/index'
import todosService from '@services/todos'
import { todosFetch } from './index'
import { ITodos } from '../interafces'

describe('Todos async actions', () => {
    describe('Todos fetch action', () => {
        it('Todos fetch action resolve', async () => {
            const todos: ITodos[] = [
                {
                    id: 1,
                    userId: 1,
                    title: 'title 1',
                    body: 'body 1'
                }
            ]
            const initialState = stateStore
            const resultState = { ...stateStore, todos: { loading: false, error: null, todos } }
            const mockedTodosService = jest.spyOn(todosService, 'get')
            mockedTodosService.mockImplementationOnce(() => Promise.resolve(todos))

            const store = createStore(initialState)
            await store.dispatch(todosFetch())

            expect(store.getState()).toEqual(resultState)
        })

        it('Todos fetch action reject', async () => {
            const error = { response: { data: 'error' } }
            const initialState = stateStore
            const resultState = { ...stateStore, todos: { loading: false, error: 'error', todos: [] } }
            const mockedTodosService = jest.spyOn(todosService, 'get')
            mockedTodosService.mockImplementationOnce(() => Promise.reject(error))

            const store = createStore(initialState)
            await store.dispatch(todosFetch())

            expect(store.getState()).toEqual(resultState)
        })
    })
})
