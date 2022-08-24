import { fireEvent } from '@testing-library/dom'

import renderWithRedux from '@common/utils/tests/renderWithRedux'
import { RootState, stateStore } from '@store/index'
import CounterContainer from './index'

describe('Counter Container', () => {
    it('render', () => {
        const component = renderWithRedux(<CounterContainer />)
        const counter = component.getByTestId('title-counter')
        const increment = component.getByTestId('button-increment')
        const decrement = component.getByTestId('button-decrement')

        expect(counter).toBeInTheDocument()
        expect(increment).toBeInTheDocument()
        expect(increment.textContent).toMatch(/increment/i)
        expect(decrement).toBeInTheDocument()
        expect(decrement.textContent).toMatch(/decrement/i)
    })

    it('render with state', () => {
        const initialState: RootState = {
            ...stateStore,
            counter: { counter: 5 }
        }
        const component = renderWithRedux(<CounterContainer />, initialState)
        const counter = component.getByTestId('title-counter')
        expect(counter).toHaveTextContent(/5/)
    })

    it('increment', () => {
        const component = renderWithRedux(<CounterContainer />)
        const counter = component.getByTestId('title-counter')
        const increment = component.getByTestId('button-increment')
        expect(counter).toHaveTextContent(/0/)

        fireEvent.click(increment)
        expect(component.getByTestId('title-counter')).toHaveTextContent(/1/)
    })

    it('decrement', () => {
        const component = renderWithRedux(<CounterContainer />)
        const counter = component.getByTestId('title-counter')
        const decrement = component.getByTestId('button-decrement')
        expect(counter).toHaveTextContent(/0/)

        fireEvent.click(decrement)
        expect(component.getByTestId('title-counter')).toHaveTextContent(/-1/)
    })
})
