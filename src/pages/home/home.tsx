import React from "react"
import {Form} from "./form/form"

import homeStyles from "./home.module.css"
import commonStyles from "../../styles/common.module.css"

export const Home = () => {
    return <div id="home-page" className={homeStyles.page + " " + commonStyles.common}>
        <Form />
        <div className={homeStyles.text}>
            <h1>Быстрый займ до 50 000 рублей</h1>
            <h2>Гарантия надежности и качества</h2>
        </div>
    </div>;
}