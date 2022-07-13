import React from "react"
import * as Router from "react-router-dom";

import styles from "./Link.module.css";

interface LinkProps {
    text: string;
    path: string;
}

export const Link = ({ text, path }: LinkProps): JSX.Element => {
    return <Router.Link className={styles.link} to={path}>{text}</Router.Link>
}