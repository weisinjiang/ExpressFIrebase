class User {
    #firstName;
    #lastName;
    #email;
    #id;
    constructor(firstName, lastName, email, id) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#id = id;
        return {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "id": id
        };
    }
    
}

module.exports = User;