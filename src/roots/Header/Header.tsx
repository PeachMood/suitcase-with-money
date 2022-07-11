import React from "react"
import {useNavigate} from "react-router-dom"
import {Navigation} from "./Navigation/Navigation"
import {Logo} from "../../components/Logo/Logo";
import {homePages} from "../RoutePages/pages";

import headerStyles from "./Header.module.css"
import buttonStyles from "../../components/Button/Button.module.css"
import commonStyles from "../../styles/common.module.css"

export const Header = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/LoginPage", {replace: true});
    }

    return <div id="header" className={headerStyles.header + " " + commonStyles.common}>
        <Logo/>
        <Navigation pages={homePages.slice(2)}/>
        <button className={buttonStyles.button} onClick={navigateLogin}>Войти</button>
    </div>;
}