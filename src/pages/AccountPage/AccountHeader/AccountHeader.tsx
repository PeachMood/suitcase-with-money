import React from "react";
import {Color, Logo} from "../../../components/Logo/Logo";

import styles from "./AccountHeader.module.css"

export const AccountHeader = (): JSX.Element => {
    return <header id="account_header" className={styles.accountHeader}>
        <Logo path="/account" color={Color.WHITE}/>
        <h3>Привет, Анна!</h3>
    </header>
}