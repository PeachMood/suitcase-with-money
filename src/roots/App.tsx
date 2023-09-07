import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { AccountPage } from "../pages/AccountPage/AccountPage";
import { HomeHeader } from "../pages/HomePage/HomeHeader/HomeHeader";
import { AccountHeader } from "../pages/AccountPage/AccountHeader/AccountHeader";
import { SideMenu } from "../pages/AccountPage/SideMenu/SideMenu";

export interface Page {
  title: string;
  path: string;
  element?: JSX.Element;
}

export const homePages: Page[] = [
  { title: "Домашняя страница", path: "/", element: <HomePage /> },
  { title: "Домашняя страница", path: "/home", element: <HomePage /> },
  { title: "Как получить", path: "/get_loan", element: <div /> },
  { title: "Как погасить", path: "/repay_loan", element: <div /> },
  { title: "Документы", path: "/documents", element: <div /> },
  { title: "Связь", path: "/contact", element: <div /> },
];

export const authPages: Page[] = [
  { title: "Личный счет", path: "/balance", element: <div /> },
  { title: "Займы", path: "/account", element: <AccountPage /> },
  { title: "Оформить займ", path: "/get_loan", element: <div /> },
  { title: "Погасить займ", path: "/repay_loan", element: <div /> },
]

export const otherPages: Page[] = [
  { title: "Авторизация", path: "/login", element: <LoginPage /> },
  { title: "Регистрация", path: "/register", element: <RegisterPage /> },
];

export const App = () => {
  const getRoutes = (pages: Page[]): JSX.Element[] => {
    return pages.map(page => <Route key={page.path} path={page.path} element={page.element} />);
  }

  return <Routes>
    <Route element={
      <Layout>
        <AccountHeader />
        <SideMenu />
      </Layout>
    }>
      {getRoutes(authPages)}
    </Route>
    <Route element={
      <Layout>
        <HomeHeader />
      </Layout>
    }>
      {getRoutes(homePages)}
    </Route>
    {getRoutes(otherPages)}
  </Routes>;
}
