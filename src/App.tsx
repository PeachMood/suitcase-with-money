import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Layout } from "./roots/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Page, PagesRoute } from "./roots/RoutePages/PagesRoute";

const homePages: Page[] = [
    {title: "Домашняя страница", path: "/", element: <HomePage/>},
    {title: "Домашняя страница", path: "/HomePage", element: <HomePage/>},
    {title: "Как получить", path: "/get_loan", element: <div/>},
    {title: "Как погасить", path: "/repay_loan", element: <div/>},
    {title: "Документы", path: "/documents", element: <div/>},
    {title: "Связь", path: "/contact", element: <div/>}
];

const otherPages: Page[] = [
    {title: "Авторизация", path: "/LoginPage", element: <LoginPage/>}
];

export const App = () => {
    return <Routes>
        <Route element={<Layout/>}>
            <PagesRoute pages={homePages}/>
        </Route>
        <PagesRoute pages={otherPages}/>
    </Routes>;
}
