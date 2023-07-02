import { UsersBridge } from 'bridges-conexion/entities.bridge';

export /*bundle*/ class Users {
    #provider: UsersBridge = new UsersBridge()
    getAll = async () => {
        try {
            const response = await this.#provider.getAll()
            if (!response) throw response
        return {status: true, data: {entries: response}}
        } catch (error) {
            return {status: false, error}
        }
    }
}