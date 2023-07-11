import { UsersBridge } from 'bridges-conexion/entities.bridge';

export /*bundle*/ class Users {
	#provider: UsersBridge = new UsersBridge();

	constructor() {
		this.listen();
	}

	async listen() {
		const backend = await this.#provider.backend;
		console.log(1, backend)
		const socket = await backend.socket;
		console.log(2, socket)
		socket.on('listen', data => {
			console.log('I am listening events from the server, data: ', data);
		});
	}
	getAll = async () => {
		try {
			const response = await this.#provider.getAll();
			if (!response) throw response;
			return { status: true, data: { entries: response } };
		} catch (error) {
			return { status: false, error };
		}
	};
}
