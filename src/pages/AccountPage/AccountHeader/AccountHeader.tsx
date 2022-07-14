import React from "react";
import {Color, Logo} from "../../../components/Logo/Logo";

import styles from "./AccountHeader.module.css"
import {Row} from "../../../components/Row/Row";

export const AccountHeader = (): JSX.Element => {
    return <span id="account_header" className={styles.accountHeader}>
        <Logo path="/account" color={Color.WHITE}/>
        <Row justifyContent="space-around" spacing={2}>
            <h3>1 200 рублей</h3>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.5 51.7917C40.9159 51.7917 51.7916 40.9159 51.7916 27.5C51.7916 14.0841 40.9159 3.20834 27.5 3.20834C14.0841 3.20834 3.20831 14.0841 3.20831 27.5C3.20831 40.9159 14.0841 51.7917 27.5 51.7917Z" stroke="white" strokeWidth="3"/>
                <path d="M27.5 31.625C33.322 31.625 38.0416 26.9053 38.0416 21.0833C38.0416 15.2613 33.322 10.5417 27.5 10.5417C21.678 10.5417 16.9583 15.2613 16.9583 21.0833C16.9583 26.9053 21.678 31.625 27.5 31.625Z" stroke="white" strokeWidth="3"/>
                <path d="M9.79169 44.1283C11.0906 40.4705 13.4903 37.3047 16.6612 35.0659C19.832 32.827 23.6184 31.625 27.5 31.625C31.3816 31.625 35.1679 32.827 38.3388 35.0659C41.5096 37.3047 43.9094 40.4705 45.2083 44.1283" stroke="white" strokeWidth="3"/>
            </svg>
        </Row>
    </span>
}