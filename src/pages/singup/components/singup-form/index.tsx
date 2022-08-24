/* eslint-disable jsx-a11y/label-has-associated-control */

import { FC } from 'react'

const SingUpForm: FC = () => {
    return (
        <form>
            <h2>Sing Up</h2>
            <label>
                Name
                <input />
            </label>
            <label>
                Email
                <input />
            </label>
            <label>
                Password
                <input />
            </label>
            <label>
                Repeat password
                <input />
            </label>
            <button type="submit">Sing Up</button>
        </form>
    )
}

export default SingUpForm
