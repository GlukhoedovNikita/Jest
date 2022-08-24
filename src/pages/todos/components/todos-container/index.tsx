import { FC } from 'react'

import TodosList from '../todos-list'

const TodosContainer: FC = () => {
    return (
        <div data-testid="todos-container">
            <TodosList />
        </div>
    )
}

export default TodosContainer
