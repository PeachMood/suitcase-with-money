import React from "react"
import {GetLoanForm} from "./GetLoanForm/GetLoanForm"

import homeStyles from "./HomePage.module.css"
import commonStyles from "../../styles/common.module.css"

export const HomePage = () => {
    return <div id="home-page" className={homeStyles.page + " " + commonStyles.common}>
        <GetLoanForm />
        <div className={homeStyles.text}>
            <h1>Быстрый займ до 50 000 рублей</h1>
            <h2>Гарантия надежности и качества</h2>
        </div>
    </div>;
}