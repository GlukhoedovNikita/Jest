import authService from '@services/auth'
import { createStore, stateStore, RootState } from '@store/index'
import { authLogin, authRegistration } from './index'
import { IUser, IUserLogin } from '../interfaces'

describe('Auth actions thunk', () => {
    const initialState: RootState = stateStore

    describe('auth registration', () => {
        const mockedAuthService = jest.spyOn(authService, 'registration')
        const user: IUser = { name: 'name', email: 'email', password: 'password' }

        it('auth registration resolve', async () => {
            const resultState: RootState = {
                ...stateStore,
                auth: {
                    loading: false,
                    error: null,
                    isAuth: true,
                    user
                }
            }

            mockedAuthService.mockImplementationOnce(() => Promise.resolve(user))
            const store = createStore(initialState)
            await store.dispatch(authRegistration(user))

            expect(store.getState()).toEqual(resultState)
        })

        it('auth registration reject', async () => {
            const error = { response: { data: 'error' } }
            const resultState: RootState = {
                ...stateStore,
                auth: {
                    loading: false,
                    error: 'error',
                    isAuth: false,
                    user: {} as IUser,
                }
            }

            mockedAuthService.mockImplementationOnce(() => Promise.reject(error))
            const store = createStore(initialState)
            await store.dispatch(authRegistration(user))
            expect(store.getState()).toEqual(resultState)
        })
    })

    describe('auth login', () => {
        const mockedAuthService = jest.spyOn(authService, 'login')
        const user: IUserLogin = { email: 'email', password: 'password' }

        it('auth login resolve', async () => {
            const userUpdated: IUser = { ...user, name: 'name' }
            const resultState: RootState = {
                ...initialState,
                auth: {
                    loading: false,
                    isAuth: true,
                    error: null,
                    user: userUpdated
                }
            }
            mockedAuthService.mockImplementationOnce(() => Promise.resolve(userUpdated))
            const store = createStore(initialState)
            await store.dispatch(authLogin(user))
            expect(store.getState()).toEqual(resultState)
        })

        it('auth login reject', async () => {
            const error = { response: { data: 'error' } }
            const resultState: RootState = {
                ...initialState,
                auth: {
                    loading: false,
                    error: 'error',
                    isAuth: false,
                    user: {} as IUser
                }
            }
            mockedAuthService.mockImplementationOnce(() => Promise.reject(error))
            const store = createStore(initialState)
            await store.dispatch(authLogin(user))
            expect(store.getState()).toEqual(resultState)
        })
    })
})
