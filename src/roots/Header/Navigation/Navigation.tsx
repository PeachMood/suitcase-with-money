import React from "react";
import styles from "./Navigation.module.css"
import {Page} from "../../RoutePages/pages"
import {Link} from "react-router-dom";

interface Props {
    pages: Page[];
}

export const Navigation = (props: Props) => {
    return (
        <ul id="navigation" className={styles.navigation}>
            {props.pages.map(page =>
                <li key={page.title}>
                    <Link to={page.path}>{page.title}</Link>
                </li>
            )}
        </ul>
    );
}