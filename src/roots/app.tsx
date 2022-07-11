import React from 'react'
import {Route, Routes} from "react-router-dom"
import {homeRoutes, otherRoutes} from "../utils/pages";
import {Layout} from "./layout/layout";

export const App = () => {
    return <Routes>
        <Route element={<Layout/>}>
            {homeRoutes}
        </Route>
        {otherRoutes}
    </Routes>;
}
