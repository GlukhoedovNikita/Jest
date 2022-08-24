export interface IUserLogin {
    email: string,
    password: string
}

export interface IUser extends IUserLogin {
    name: string,
}

export interface IAuthState {
    isAuth: boolean,
    loading: boolean,
    error: null | string,
    user: IUser
}
