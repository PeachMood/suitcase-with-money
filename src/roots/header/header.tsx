import React from "react"
import {Link, useNavigate} from "react-router-dom"
import {Navigation} from "./navigation/navigation"
import {homePages} from "../../utils/pages";

import headerStyles from "./header.module.css"
import buttonStyles from "../../styles/ui/button.module.css"
import commonStyles from "../../styles/common.module.css"

export const Header = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login", {replace: true});
    }

    return <div id="header" className={headerStyles.header + " " + commonStyles.common}>
        <Link id="logo" className={headerStyles.logo} to={"/home"}/>
        <Navigation pages={homePages.slice(2)}/>
        <button className={buttonStyles.button} onClick={navigateLogin}>Войти</button>
    </div>;
}