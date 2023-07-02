import {ReactiveModel} from '@beyond-js/reactive/model'
import { Users } from 'bridges-conexion/entities.ts'

export class Store extends ReactiveModel<Store> {
    #entity: Users = new Users()
    #error: string = ''
    get error () {
        return this.#error
    }

    #items: string[] = []
    get items () {
        return this.#items
    }

    getAllUsers = async () => {
        try {
            this.fetching = true
            const response = await this.#entity.getAll();
            if (!response?.status) throw response
            this.#items = response.data.entries
        } catch (error) {
            console.error(error)
            this.#error = 'ERROR_LOADING_USERS'
            return error
        } finally {
            this.fetching = false
        }
    }
}