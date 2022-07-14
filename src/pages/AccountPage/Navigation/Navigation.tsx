import React from "react";
import { Link } from "../../../components/Link/Link";
import {authPages} from "../../../App";

import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <ul id="navigation" className={styles.navigation}>
            {authPages.map(page =>
                <li key={page.title}>
                    <Link text={page.title} path={page.path}/>
                </li>
            )}
        </ul>
    );
}