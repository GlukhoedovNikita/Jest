import { FC, useEffect } from 'react'

import useTypedDispatch from '@common/hooks/useTypedDispatch'
import useTypedSelector from '@common/hooks/useTypedSelector'

import { todosFetch } from '@store/slice/todos/actions'
import todosSelector from '@store/slice/todos/selectors'

import TodosItem from '../todos-item'

const TodosList: FC = () => {
    const dispatch = useTypedDispatch()
    const { loading, error, todos } = useTypedSelector(todosSelector)

    useEffect(() => {
        dispatch(todosFetch())
    }, [])

    return (
        <div>
            {
                loading &&
                <p data-testid="todos-list-loading">Loading ...</p>
            }
            {
                error &&
                <p data-testid="todos-list-error">Error</p>
            }
            {
                !!todos?.length && todos.map((todo) => <TodosItem
                    key={todo.id}
                    _id={todo.id}
                    title={todo.title}
                    body={todo.body}
                />)
            }
        </div>
    )
}

export default TodosList
