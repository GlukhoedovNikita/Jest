import { MemoryRouter } from 'react-router-dom'
import { ReactElement } from 'react'
import { PreloadedState } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { RootState, createStore } from '@store/index'

const renderWithAll = (component: ReactElement, initialState: PreloadedState<RootState> = {}) => {
    return render(
        <Provider store={createStore(initialState)}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
        </Provider>
    )
}

export default renderWithAll
