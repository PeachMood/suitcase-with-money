import ApiService from "./ApiService";
import {LoginData, PassportData, PersonId, PersonInformation} from "../utils/types";

export default class AuthorizationService extends ApiService {
    async login(request: LoginData): Promise<PersonId | null> {
        return this.createPostRequest<PersonId | null>("login")(request);
    }

    async registerPerson(request: LoginData): Promise<PersonId | null> {
        return this.createPostRequest<PersonId | null>("registration")(request);
    }

    async setPassport(idPerson: number, request: PassportData): Promise<PersonInformation> {
        return this.createPostRequest<PersonInformation>("person")(request, {idPerson: idPerson});
    }
}