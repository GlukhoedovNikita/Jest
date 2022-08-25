import { AnyAction } from 'redux'
import authReducer from './index'
import { authRegistration, authLogin } from '@store/slice/auth/actions'
import { IAuthState, IUser } from './interfaces'

describe('Auth Slice', () => {
    const initialState: IAuthState = {
        loading: false,
        error: null,
        isAuth: false,
        user: {} as IUser
    }
    describe('Auth registration', () => {
        it('pending', () => {
            const action: AnyAction = { type: authRegistration.pending.type }
            const resultState: IAuthState = {
                isAuth: false,
                error: null,
                loading: true,
                user: {} as IUser
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })
        it('fulfilled', () => {
            const user: IUser = { name: 'name', email: 'email', password: 'password' }
            const action: AnyAction = { type: authRegistration.fulfilled.type, payload: user }
            const resultState: IAuthState = {
                loading: false,
                error: null,
                isAuth: true,
                user
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })

        it('reject', () => {
            const error = 'error'
            const action: AnyAction = { type: authRegistration.rejected.type, payload: error }
            const resultState: IAuthState = {
                loading: false,
                isAuth: false,
                user: {} as IUser,
                error
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })
    })
    describe('Auth Login', () => {
        it('pending', () => {
            const action: AnyAction = { type: authLogin.pending.type }
            const resultState: IAuthState = {
                isAuth: false,
                error: null,
                loading: true,
                user: {} as IUser
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })
        it('fulfilled', () => {
            const user: IUser = { name: 'name', email: 'email', password: 'password' }
            const action: AnyAction = { type: authLogin.fulfilled.type, payload: user }
            const resultState: IAuthState = {
                loading: false,
                error: null,
                isAuth: true,
                user
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })

        it('reject', () => {
            const error = 'error'
            const action: AnyAction = { type: authLogin.rejected.type, payload: error }
            const resultState: IAuthState = {
                loading: false,
                isAuth: false,
                user: {} as IUser,
                error
            }
            expect(authReducer(initialState, action)).toEqual(resultState)
        })
    })
})
