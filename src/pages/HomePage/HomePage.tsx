import React from "react"
import { LoanForm } from "./LoanForm/LoanForm"
import { Stack } from "@mui/material";

import styles from "./HomePage.module.css"

export const HomePage = () => {
    return <div id="home-page" >
        <Stack className={styles.page} direction="row" alignItems="center" justifyContent="space-around">
            <LoanForm/>
            <Stack className={styles.text} spacing={3} justifyContent="space-between">
                <h1>Быстрый займ до 50 000 рублей</h1>
                <h2>Гарантия надежности и качества</h2>
            </Stack>
        </Stack>
    </div>;
}