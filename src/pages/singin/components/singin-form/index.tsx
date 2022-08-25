/* eslint-disable jsx-a11y/label-has-associated-control */

import { FC } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useTypedDispatch from '@common/hooks/useTypedDispatch'
import { authLogin } from '@store/slice/auth/actions'

import yupSchema from '@pages/singin/constants/yupSchame'
import { IUserLogin } from '@store/slice/auth/interfaces'

const SingInForm: FC = () => {
    const dispatch = useTypedDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    })

    const onSumbit = (data: FieldValues) => dispatch(authLogin(data as IUserLogin))

    return (
        <form onSubmit={handleSubmit(onSumbit)} data-testid="singin-form">
            <h2 data-testid="title">Sing In</h2>
            <label>
                Email
                <input data-testid="email" {...register('email')} />
                {
                    errors?.email?.message &&
                    <p>{errors.email.message as string}</p>
                }
            </label>
            <label>
                Password
                <input data-testid="password" {...register('password')} />
                {
                    errors?.password?.message &&
                    <p>{errors.password.message as string}</p>
                }
            </label>
            <button data-testid="button" type="submit">Sing In</button>
        </form>
    )
}

export default SingInForm
