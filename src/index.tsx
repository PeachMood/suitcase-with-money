import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import StoreService from "./services/StoreService";

const store = new StoreService();
export const Context = createContext<StoreService>(store);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>
);
