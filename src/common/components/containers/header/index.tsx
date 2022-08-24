import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/singup">Sing Up</Link>
            <Link to="/singin">Sing In</Link>
        </header>
    )
}

export default Header
