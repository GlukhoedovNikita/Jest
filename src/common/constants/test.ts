import { SERVER_URL } from '@common/constants'

describe('Common constants', () => {
    it('Server url', () => {
        const serverUrl = 'https://jsonplaceholder.typicode.com'
        expect(SERVER_URL).toBe(serverUrl)
    })
})
