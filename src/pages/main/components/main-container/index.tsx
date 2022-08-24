import { FC } from 'react'
import { Link } from 'react-router-dom'

const MainContainer: FC = () => {
    return (
        <section>
            <Link to="/">Home</Link>
            <Link to="/singin">Sing Up</Link>
            <Link to="/singup">Sing In</Link>
        </section>
    )
}

export default MainContainer
