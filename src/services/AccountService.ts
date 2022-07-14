import ApiService from "./ApiService";
import {PersonInformation} from "../utils/types";

export default class AccountService extends ApiService {
    async getPersonInformation(personId: number): Promise<PersonInformation> {
        return this.createGetRequest<PersonInformation>("person")({personId: personId});
    }
}
