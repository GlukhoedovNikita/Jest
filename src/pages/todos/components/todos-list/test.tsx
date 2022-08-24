import renderWithRedux from '@common/utils/tests/renderWithRedux'
import TodosList from './index'
// import { RootState, stateStore } from '@store/index'

describe('Todos List', () => {
    it('render', async () => {
        const component = renderWithRedux(<TodosList />)
        const todosItems = await component.findAllByTestId('todos-item')
        const loading = component.queryByTestId('todos-list-loading')
        const error = component.queryByTestId('todos-list-error')

        expect(todosItems).toBeTruthy()
        expect(loading).toBeNull()
        expect(error).toBeNull()
    })
})
