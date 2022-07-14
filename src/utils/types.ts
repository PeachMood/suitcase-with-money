export interface LoginData {
    login: string;
    password: string;
}

export interface PassportData {
    name: string;
    surname: string;
    patronymics: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}

export type PersonInformation = {id: number, balance: number} & PassportData

export interface PersonId { idPerson: number }

export type ErrorMessage = string | null