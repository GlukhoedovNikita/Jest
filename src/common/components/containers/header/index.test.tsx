import renderWithRouter from '@common/utils/tests/renderWithRouter'

import Header from './index'

describe('Header', () => {
    it('render', () => {
        const component = renderWithRouter(<Header />)

        expect(component.getByText(/home/i)).toBeInTheDocument()
        expect(component.getByText(/sing in/i)).toBeInTheDocument()
        expect(component.getByText(/sing up/i)).toBeInTheDocument()
    })
})
