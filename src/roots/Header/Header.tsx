import React from "react"
import { useNavigate } from "react-router-dom"
import { Navigation } from "./Navigation/Navigation"
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";

import headerStyles from "./Header.module.css"

export const Header = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login", {replace: true});
    }

    return <span id="header" className={headerStyles.header}>
        <Logo/>
        <Navigation />
        <Button onClick={navigateLogin}>Войти</Button>
    </span>;
}