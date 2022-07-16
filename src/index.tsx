import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './roots/App';
import {BrowserRouter} from "react-router-dom";
import {ContextProvider} from "./roots/ContextProvider/ContextProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ContextProvider>
);
