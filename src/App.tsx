import React, {useContext} from 'react'
import {Route, Routes} from "react-router-dom"
import {Layout} from "./components/Layout/Layout";
import {HomePage} from "./pages/HomePage/HomePage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {AccountPage} from "./pages/AccountPage/AccountPage";
import {Context} from "./index";
import StoreService from "./services/StoreService";
import {HomeHeader} from "./pages/HomePage/HomeHeader/HomeHeader";
import {AccountHeader} from "./pages/AccountPage/AccountHeader/AccountHeader";

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
    {title: "Связь", path: "/contact", element: <div/>},
];

export const authPages: Page[] = [
    {title: "Личный счет", path: "/balance", element: <div/>},
    {title: "Займы", path: "/account", element: <AccountPage/>},
    {title: "Оформить займ", path: "/get_loan", element: <div/>},
    {title: "Погасить займ", path: "/repay_loan", element: <div/>},
]

export const otherPages: Page[] = [
    {title: "Авторизация", path: "/login", element: <LoginPage/>},
    {title: "Регистрация", path: "/register", element: <RegisterPage/>},
];

export const App = () => {
    const store = useContext<StoreService>(Context);
    const getRoutes = (pages: Page[]): JSX.Element[] => {
        return pages.map(page => <Route key={page.path} path={page.path} element={page.element}/>);
    }

    return <Routes>
        {store.checkAuth() ?
            <Route element={<Layout header={<AccountHeader/>}/>}>
                {getRoutes(authPages)}
            </Route> :
            <Route element={<Layout header={<HomeHeader/>}/>}>
                {getRoutes(homePages)}
            </Route>}
        {getRoutes(otherPages)}
    </Routes>;
}
