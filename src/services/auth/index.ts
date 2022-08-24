import axios from 'axios'

import { IUser, IUserLogin } from '@store/slice/auth/interfaces'

class AuthService {
    async registration(user: IUser) {
        try {
            const response = await axios.post<IUser>('/registration', user)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async login(user: IUserLogin) {
        try {
            const response = await axios.post<IUser>('/login', user)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
