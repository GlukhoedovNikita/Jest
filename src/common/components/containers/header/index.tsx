import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header>
            <Link to="/" data-testid="counter-link">Counter</Link>
            <Link to="/todos" data-testid="todos-link">Todos</Link>
        </header>
    )
}

export default Header
