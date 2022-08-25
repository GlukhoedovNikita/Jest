/* eslint-disable jsx-a11y/label-has-associated-control */

import { FC } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useTypedDispatch from '@common/hooks/useTypedDispatch'
import { authRegistration } from '@store/slice/auth/actions'

import yupSchema from '@pages/singup/constants/yupSchema'
import { IUser } from '@store/slice/auth/interfaces'

const SingUpForm: FC = () => {
    const dispatch = useTypedDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    })

    const onSubmit = (data: FieldValues) => dispatch(authRegistration(data as IUser))

    return (
        <form data-testid="singup-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 data-testid="title">Sing Up</h2>
            <label>
                Name
                <input data-testid="name" {...register('name')} />
                {
                    errors?.name?.message &&
                    <p>{errors?.name?.message as string}</p>
                }
            </label>
            <label>
                Email
                <input data-testid="email" {...register('email')} />
                {
                    errors?.email?.message &&
                    <p>{errors?.email?.message as string}</p>
                }
            </label>
            <label>
                Password
                <input data-testid="password" {...register('password')} />
                {
                    errors?.password?.message &&
                    <p>{errors?.password?.message as string}</p>
                }
            </label>
            <label>
                Repeat password
                <input data-testid="repeatPassword" {...register('repeatPassword')} />
                {
                    errors?.repeatPassword?.message &&
                    <p>{errors?.repeatPassword?.message as string}</p>
                }
            </label>
            <button data-testid="button" type="submit">Sing Up</button>
        </form>
    )
}

export default SingUpForm
