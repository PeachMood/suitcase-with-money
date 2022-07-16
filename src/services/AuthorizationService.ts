import ApiService from "./ApiService";
import {User, Passport, Person} from "../utils/types";

export default class AuthorizationService extends ApiService {
    async login(request: User): Promise<number | null> {
        return this.createPostRequest<number | null>("login")(request);
    }

    async registerPerson(request: User): Promise<number | null> {
        return this.createPostRequest<number | null>("registration")(request);
    }

    async setPassport(idPerson: number, request: Passport): Promise<Person> {
        return this.createPostRequest<Person>(`person/${idPerson}`)(request);
    }
}