import React from "react"
import { LoanForm } from "./LoanForm/LoanForm"

import homeStyles from "./HomePage.module.css"

export const HomePage = () => {
    return <div id="home-page" className={homeStyles.page}>
        <LoanForm/>
        <div className={homeStyles.text}>
            <h1>Быстрый займ до 50 000 рублей</h1>
            <h2>Гарантия надежности и качества</h2>
        </div>
    </div>;
}