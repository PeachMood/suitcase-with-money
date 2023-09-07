import React, { FC, ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <button className={styles.defaultButton} {...props} />
}
