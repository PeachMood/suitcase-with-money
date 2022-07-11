import React from "react"

import styles from "./Button.module.css"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps): JSX.Element => {
    return <button className={styles.defaultButton} {...props}/>
}