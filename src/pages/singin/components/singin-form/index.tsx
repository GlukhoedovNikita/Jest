/* eslint-disable jsx-a11y/label-has-associated-control */

import { FC } from 'react'

const SingInForm: FC = () => {
    return (
        <form>
            <h2>Sing In</h2>
            <label>
                Email
                <input />
            </label>
            <label>
                Password
                <input />
            </label>
            <button type="submit">Sing In</button>
        </form>
    )
}

export default SingInForm
