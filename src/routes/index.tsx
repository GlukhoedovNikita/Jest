import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from '@pages/main'
import SingInPage from '@pages/singin'
import SingUpPage from '@pages/singup'

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/singin" element={<SingInPage />} />
            <Route path="/singup" element={<SingUpPage />} />
        </Routes>
    )
}

export default App
