const USERS = ["maria.jose", "jose.maria", "eduardo.bryant", "bryant.eduardo", "tifani.santiaga", "santiaga.tifani", "pedro.sanchez", "wanaberto"]

export /*actions*/ /*bundle*/ class UsersBridge {
    #timeout: number = 30000
    
    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = USERS
                resolve(users);
            }, this.#timeout);
        });
}

}