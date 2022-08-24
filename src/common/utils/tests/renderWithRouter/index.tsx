import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

const renderWithRouter = (component: ReactElement) => {
    return render(
        <MemoryRouter>
            {component}
        </MemoryRouter>
    )
}

export default renderWithRouter
