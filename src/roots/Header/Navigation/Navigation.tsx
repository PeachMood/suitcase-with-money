import React from "react";
import styles from "./Navigation.module.css"
import { Link } from "react-router-dom";
import { homePages } from "../../../App";

export const Navigation = () => {
    return (
        <ul id="navigation" className={styles.navigation}>
            {homePages.map(page =>
                <li key={page.title}>
                    <Link to={page.path}>{page.title}</Link>
                </li>
            )}
        </ul>
    );
}