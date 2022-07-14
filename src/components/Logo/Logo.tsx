import React from "react"
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export enum Color {
    WHITE,
    BLUE,
}

interface LogoProps {
    path: string;
    color?: Color;
}

export const Logo = ({path, color}: LogoProps) => {
    if (color === Color.WHITE) {
        return <Link id="logo" className={styles.whiteLogo} to={path}/>;
    }
    return <Link id="logo" className={styles.blueLogo} to={path}/>;
}