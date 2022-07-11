import React from "react"
import {Link} from "react-router-dom";

import headerStyles from "./logo.module.css";

export const Logo = () => {
    return <Link id="logo" className={headerStyles.logo} to={"/home"}/>;
}