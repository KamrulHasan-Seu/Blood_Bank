import axios from "axios";

export default class UserService {
    static saveUser(user) {
        return axios.post("http://localhost:8080/users/save", user);
    }
}