import React from "react"
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export const Logo = () => {
    return <Link id="logo" className={styles.logo} to={"/HomePage"}/>;
}