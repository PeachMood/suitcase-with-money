import {makeAutoObservable} from "mobx";

type StoreData = number | undefined;

export default class StoreService {
    private idPerson: StoreData;
    private isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getStoreData(): StoreData {
        return this.idPerson;
    }

    checkAuth(): boolean {
        return this.isAuth;
    }

    setStoreData(idPerson: StoreData) {
        this.idPerson = idPerson;
    }

    setAuth(value: boolean) {
        this.isAuth = value;
    }
}