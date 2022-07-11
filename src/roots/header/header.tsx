import React from "react"
import {useNavigate} from "react-router-dom"
import {Navigation} from "./navigation/navigation"
import {Logo} from "../../utils/logo/logo";
import {homePages} from "../route/pages";

import headerStyles from "./header.module.css"
import buttonStyles from "../../styles/ui/button.module.css"
import commonStyles from "../../styles/common.module.css"

export const Header = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login", {replace: true});
    }

    return <div id="header" className={headerStyles.header + " " + commonStyles.common}>
        <Logo/>
        <Navigation pages={homePages.slice(2)}/>
        <button className={buttonStyles.button} onClick={navigateLogin}>Войти</button>
    </div>;
}