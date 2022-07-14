import React from "react"
import { useNavigate } from "react-router-dom"
import { Navigation } from "./Navigation/Navigation"
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";

import headerStyles from "./HomeHeader.module.css"

export const HomeHeader = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login", {replace: true});
    }

    return <header id="home_header" className={headerStyles.homeHeader}>
        <Logo path="home"/>
        <Navigation />
        <Button onClick={navigateLogin}>Войти</Button>
    </header>;
}