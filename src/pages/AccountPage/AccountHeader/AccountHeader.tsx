import React, {useContext} from "react";
import {Color, Logo} from "../../../components/Logo/Logo";

import styles from "./AccountHeader.module.css"
import {Context, ContextData} from "../../../roots/ContextProvider/ContextProvider";

export const AccountHeader = (): JSX.Element => {
    const context = useContext<ContextData>(Context);
    return <header id="account_header" className={styles.accountHeader}>
        <Logo path="/account" color={Color.WHITE}/>
        <h3>Привет, {context.person.name}!</h3>
    </header>
}