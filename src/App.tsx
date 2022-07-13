import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Layout } from "./roots/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export interface Page {
    title: string;
    path: string;
    element?: JSX.Element;
}

export const homePages: Page[] = [
    {title: "Домашняя страница", path: "/", element: <HomePage/>},
    {title: "Домашняя страница", path: "/home", element: <HomePage/>},
    {title: "Как получить", path: "/get_loan", element: <div/>},
    {title: "Как погасить", path: "/repay_loan", element: <div/>},
    {title: "Документы", path: "/documents", element: <div/>},
    {title: "Связь", path: "/contact", element: <div/>}
];

export const otherPages: Page[] = [
    {title: "Авторизация", path: "/login", element: <LoginPage/>},
    {title: "Регистрация", path: "/register", element: <RegisterPage/>}
];

export const App = () => {
    const getRoutes = (pages: Page[]): JSX.Element[] => {
        return pages.map(page => <Route key={page.path} path={page.path} element={page.element}/>);
    }

    return <Routes>
        <Route element={<Layout/>}>
            {getRoutes(homePages)}
        </Route>
        {getRoutes(otherPages)}
    </Routes>;
}
