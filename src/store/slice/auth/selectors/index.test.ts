import { RootState, stateStore } from '@store/index'
import { IAuthState, IUser } from '../interfaces'
import authSelector from './index'

describe('Auth selector', () => {
    it('initialState', () => {
        const resultState: IAuthState = {
            loading: false,
            isAuth: false,
            error: null,
            user: {} as IUser,
        }
        const initialState: RootState = {
            ...stateStore,
            ...resultState,
        }
        expect(authSelector(initialState)).toEqual(resultState)
    })
})
