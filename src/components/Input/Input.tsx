import React, { Component } from "react";
import { TextField, TextFieldProps } from "@mui/material";

import styles from "./Input.module.css";

export default class Input extends Component<TextFieldProps, {}>  {
  render() {
    return <TextField className={styles.textField} type="password" variant="outlined" {...this.props} />
  }
}
