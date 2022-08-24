import { FC } from 'react'

import { TodosItemProps } from './interfaces'

const TodosItem: FC<TodosItemProps> = ({
    className,
    _id,
    title,
    body,
    ...props
}) => {
    return (
        <div className={className} data-testid="todos-item" {...props}>
            <h3 data-testid="todos-title">
                {title}
                &nbsp;-&nbsp;
                {_id}
            </h3>
            <p data-testid="todos-body">{body}</p>
        </div>
    )
}

export default TodosItem
