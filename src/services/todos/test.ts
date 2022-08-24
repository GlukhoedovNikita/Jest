import axios from 'axios'

import todosService from './index'
import { SERVER_URL } from '@common/constants'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Todos service', () => {
    it('Todos get resolve', async () => {
        const todos = [
            {
                id: 1,
                userId: 1,
                title: 'title 1',
                body: 'body 1'
            },
            {
                id: 2,
                userId: 1,
                title: 'title 2',
                body: 'body 2'
            }
        ]
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: todos }))
        const todosResult = await todosService.get()
        expect(todosResult).toEqual(todos)
        expect(mockedAxios.get).toHaveBeenCalledWith(`${SERVER_URL}/posts`)
    })

    it('Todos get reject', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('error')))
        await expect(todosService.get()).rejects.toThrowError(/error/i)
        expect(mockedAxios.get).toHaveBeenCalledWith(`${SERVER_URL}/posts`)
    })
})
