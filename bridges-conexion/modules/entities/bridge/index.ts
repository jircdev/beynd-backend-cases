const USERS = [
	'maria.jose',
	'jose.maria',
	'eduardo.bryant',
	'bryant.eduardo',
	'tifani.santiaga',
	'santiaga.tifani',
	'pedro.sanchez',
	'wanaberto',
];

export /*actions*/ /*bundle*/ class UsersBridge {
	#timeout: number = 10000;
	#socket;
	constructor(socket) {
		this.#socket = socket;
	}
	getAll() {
		console.log(this.#socket);
		this.#socket.emit('listen', { message: 'this is a message from the server' });
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const users = USERS;
				resolve(users);
			}, this.#timeout);
		});
	}
}
