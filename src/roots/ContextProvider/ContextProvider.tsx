import { createContext, ReactNode } from "react";
import { Person } from "../../utils/types";

interface ContextProps {
    children: ReactNode;
}

export interface ContextData {
    isAuthorized: boolean;
    person: Person;
}

const defaultValue: ContextData = { person: {}, isAuthorized: false };

export const Context = createContext<ContextData>(defaultValue);

export const ContextProvider = ({ children }: ContextProps): JSX.Element => {
    return <Context.Provider value={ defaultValue }>{ children }</Context.Provider>
}
