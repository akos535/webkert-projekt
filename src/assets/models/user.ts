export class User {
    username: string;
    password: string; //veri széf
    email: string;
    isAdmin: boolean;

    constructor(username: string, password: string, email: string, isAdmin: boolean) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
const users: User[] = []
users.push(new User("example_elek", "password123", "elek@example.hu", true))
users.push(new User("example_elemer", "password123", "elemer@example.hu", false))
users.push(new User("example_emir", "password123", "emir@example.hu", false))

