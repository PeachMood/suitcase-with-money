import ApiService from "./ApiService";
import {Loan, Person} from "../utils/types";

export default class AccountService extends ApiService {
    private readonly personId: number;

    constructor(personId: number) {
        super();
        this.personId = personId;
    }

    async getPersonInformation(): Promise<Person> {
        console.log(this.personId);
        return this.createGetRequest<Person>(`person/${this.personId}`)();
    }

    async getPersonLoans(): Promise<Loan[]> {
        return this.createGetRequest<Loan[]>(`person/${this.personId}/loan`)();
    }
}
