import { IUser, IUserLogin } from '@store/slice/auth/interfaces'
import axios from 'axios'
import authService from './index'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Auth Service', () => {
    describe('registration', () => {
        const user: IUser = { name: 'name', email: 'email', password: 'password' }
        it('auth service registration resolve', async () => {
            const response = { data: user }
            mockedAxios.post.mockImplementationOnce(() => Promise.resolve(response))
            await expect(authService.registration(user)).resolves.toEqual(user)
            expect(mockedAxios.post).toHaveBeenCalledWith('/registration', user)
        })

        it('auth service registration reject', async () => {
            const error = 'error'
            mockedAxios.post.mockImplementationOnce(() => Promise.reject(new Error(error)))
            await expect(authService.registration(user)).rejects.toThrow(/error/i)
            expect(mockedAxios.post).toHaveBeenCalledWith('/registration', user)
        })
    })

    describe('login', () => {
        const user: IUserLogin = { email: 'email', password: 'password' }
        it('auth service login resolve', async () => {
            const userResult = { name: 'name', email: 'email', password: 'password' }
            const response = { data: userResult }
            mockedAxios.post.mockImplementationOnce(() => Promise.resolve(response))
            await expect(authService.login(user)).resolves.toEqual(userResult)
            expect(mockedAxios.post).toHaveBeenCalledWith('/login', user)
        })

        it('auth service login reject', async () => {
            const error = 'error'
            mockedAxios.post.mockImplementationOnce(() => Promise.reject(new Error(error)))
            await expect(authService.login(user)).rejects.toThrow(/error/i)
            expect(mockedAxios.post).toHaveBeenCalledWith('/login', user)
        })
    })
})
