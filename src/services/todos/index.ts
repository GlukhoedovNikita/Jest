import axios from 'axios'

import { SERVER_URL } from '@common/constants'
import { ITodos } from '@store/slice/todos/interafces'

class TodosService {
    async get() {
        try {
            const response = await axios.get<ITodos[]>(`${SERVER_URL}/posts`)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new TodosService()
