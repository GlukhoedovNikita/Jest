import renderWithRouter from '@common/utils/tests/renderWithRouter'
import renderWithAll from '@common/utils/tests/renderWithAll'
import { fireEvent } from '@testing-library/dom'

import Header from './index'
import App from '@routes/index'

describe('Header', () => {
    it('render', () => {
        const component = renderWithRouter(<Header />)
        const counter = component.getByTestId('counter-link')
        const todos = component.getByTestId('todos-link')

        expect(counter).toBeInTheDocument()
        expect(todos).toBeInTheDocument()
    })

    it('router todos', () => {
        const component = renderWithAll(<App />)
        const todos = component.getByTestId('todos-link')

        fireEvent.click(todos)
        expect(component.getByTestId('todos-container')).toBeInTheDocument()
        expect(component.queryByTestId('counter-container')).toBeNull()
    })

    it('router counter', () => {
        const component = renderWithAll(<App />)
        const counter = component.getByTestId('counter-link')

        fireEvent.click(counter)
        expect(component.getByTestId('counter-container')).toBeInTheDocument()
    })
})
