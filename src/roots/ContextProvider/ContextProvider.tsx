import { createContext, ReactNode, useState, FC } from "react";
import { Person } from "../../utils/types";

interface ContextProps {
  children: ReactNode;
}

interface ContextData {
  isAuthorized: boolean;
  setIsAuthorized: (isAuthorized: boolean) => void;
  person: Person;
  setPerson: (person: Person) => void;
};

export type ContextType = ContextData | null;

export const Context = createContext<ContextType>(null);

export const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [person, setPerson] = useState({ id: 1, name: 'Анна' });

  return <Context.Provider value={{ isAuthorized, setIsAuthorized, person, setPerson }}>{children}</Context.Provider>
}
