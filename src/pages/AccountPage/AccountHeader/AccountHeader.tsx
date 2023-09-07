import React, { FC, useContext } from "react";
import { Color, Logo } from "../../../components/Logo/Logo";

import styles from "./AccountHeader.module.css"
import { Context, ContextType } from "../../../roots/ContextProvider/ContextProvider";

export const AccountHeader: FC = () => {
  const context = useContext<ContextType>(Context);
  return <header id="account_header" className={styles.accountHeader}>
    <Logo path="/account" color={Color.WHITE} />
    <h3>Привет, {context?.person.name}!</h3>
  </header>
}
