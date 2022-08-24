export interface ITodos {
    id: number,
    userId: number,
    title: string,
    body: string,
}

export interface ITodosState{
    loading: boolean,
    error: null | string,
    todos: ITodos[],
}
