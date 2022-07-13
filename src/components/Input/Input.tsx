import React from "react";
import {TextField, TextFieldProps} from "@mui/material";

import styles from "./Input.module.css";

export default class Input extends React.Component<TextFieldProps, {}>  {
    render(): JSX.Element {
        return <TextField className = {styles.textField} type="password" variant="outlined" {...this.props}/>
    }
}