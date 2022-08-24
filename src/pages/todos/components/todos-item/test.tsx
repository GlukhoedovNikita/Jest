import { render } from '@testing-library/react'

import TodosItem from './index'

describe('Todo Item', () => {
    it('render', () => {
        const props = { _id: 1, title: 'title 1', body: 'body 1' }
        const component = render(<TodosItem {...props} />)
        const title = component.getByTestId('todos-title')
        const body = component.getByTestId('todos-body')

        expect(title).toBeInTheDocument()
        expect(body).toBeInTheDocument()

        expect(title).toHaveTextContent(/title 1 - 1/i)
        expect(body).toHaveTextContent(/body 1/i)
    })
})
