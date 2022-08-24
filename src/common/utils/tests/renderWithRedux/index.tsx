import { ReactElement } from 'react'
import { PreloadedState } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { createStore, RootState } from '@store/index'

const renderWithRedux = (component: ReactElement, initialState: PreloadedState<RootState> = {}) => {
    return render(
        <Provider store={createStore(initialState)}>
            {component}
        </Provider>
    )
}

export default renderWithRedux
