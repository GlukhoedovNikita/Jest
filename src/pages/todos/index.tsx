import { FC } from 'react'

import MainLayout from '@common/components/layouts/main-layout'
import TodosContainer from './components/todos-container'

const TodosPage: FC = () => {
    return (
        <MainLayout>
            <TodosContainer />
        </MainLayout>
    )
}

export default TodosPage
