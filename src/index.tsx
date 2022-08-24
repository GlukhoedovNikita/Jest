import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore } from './store'

import App from '@routes/index'

import '@styles/global.scss'

const root = ReactDom.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
        <Provider store={createStore()}>
            <App />
        </Provider>
    </BrowserRouter>
)
