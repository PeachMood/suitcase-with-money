import React from "react";
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

import styles from "./Menu.module.css";


export const Menu = (): JSX.Element => {
    return <div id="menu" className={styles.menu}>
        <Stack spacing={7} justifyContent="center">
            <Stack spacing={4}>
                <h3>Аккаунт</h3>
                <Link to="/balance">Личный счет</Link>
                <a>Выйти</a>
            </Stack>
            <Stack spacing={4}>
                <h3>Меню</h3>
                <Link to="/account">Займы</Link>
                <Link to="/get_loan">Оформить займ</Link>
                <Link to="/repay_loan">Погасить займ</Link>
            </Stack>
        </Stack>
    </div>
}