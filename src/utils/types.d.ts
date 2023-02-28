export interface User {
    login: string;
    password: string;
}

export interface Passport {
    name: string;
    surname: string;
    patronymics: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}

export interface Loan {
    id: number;
    title: string;
    amountLeft: number;
    loanAmount: number,
    rate: number,
    days: number,
    startDate: string,
    expirationDate: string;
}

export type Person = {id: number, balance: number} & PassportData

export type ErrorMessage = string | null

export type ErrorElement = JSX.Element | null