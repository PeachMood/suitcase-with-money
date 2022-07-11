import {Home} from "../pages/home/home";
import {Login} from "../pages/login/login";
import {Route} from "react-router-dom";
import React from "react";

export interface Page {
    title: string;
    path: string;
    element?: JSX.Element;
}

export const homePages: Page[] = [
    {title: "Домашняя страница", path: "/", element: <Home/>},
    {title: "Домашняя страница", path: "/home", element: <Home/>},
    {title: "Как получить", path: "/get_loan", element: <div/>},
    {title: "Как погасить", path: "/repay_loan", element: <div/>},
    {title: "Документы", path: "/documents", element: <div/>},
    {title: "Связь", path: "/contact", element: <div/>}
];

export const otherPages: Page[] = [
    {title: "Авторизация", path: "/login", element: <Login/>}
]

const getRoutes = (pages: Page[]): JSX.Element[] => {
    return pages.map(page => <Route key={page.path} path={page.path} element={page.element}/>);
}
export const homeRoutes: JSX.Element[] = getRoutes(homePages);
export const otherRoutes: JSX.Element[] = getRoutes(otherPages);