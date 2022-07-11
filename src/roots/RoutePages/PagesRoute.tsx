import React from "react"
import { Route } from "react-router-dom";

export interface Page {
    title: string;
    path: string;
    element?: JSX.Element;
}

type PagesRouteProps = { pages: Page[] }

export const PagesRoute = ({ pages }: PagesRouteProps): JSX.Element => {
    return <>{pages.map(page => <Route key={page.path} path={page.path} element={page.element}/>)}</>
}