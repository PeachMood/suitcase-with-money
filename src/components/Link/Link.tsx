import React, { FC } from "react"
import * as Router from "react-router-dom";

import styles from "./Link.module.css";

interface LinkProps {
  text: string;
  path: string;
}

export const Link: FC<LinkProps> = ({ text, path }: LinkProps) => {
  return <Router.Link className={styles.link} to={path}>{text}</Router.Link>
}
