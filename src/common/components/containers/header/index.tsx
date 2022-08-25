import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header>
            <Link data-testid="home link" to="/">Home</Link>
            <Link data-testid="singup-link" to="/singup">Sing Up</Link>
            <Link data-testid="singin-link" to="/singin">Sing In</Link>
        </header>
    )
}

export default Header
