import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import CounterPage from '@pages/counter'
import TodosPage from '@pages/todos'

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CounterPage />} />
            <Route path="/todos" element={<TodosPage />} />
        </Routes>
    )
}

export default App
