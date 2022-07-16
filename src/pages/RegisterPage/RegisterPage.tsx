import React, {useContext, useState} from "react";
import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Alert} from "@mui/material";
import {ErrorElement, User, Passport} from "../../utils/types";
import {LoginForm} from "./LoginForm/LoginForm";
import {PassportForm} from "./PassportForm/PassportForm";
import AuthService from "../../services/AuthorizationService";
import {Link} from "../../components/Link/Link";
import {Context, ContextData} from "../../roots/ContextProvider/ContextProvider";

import styles from "./RegisterPage.module.css";
import {useNavigate} from "react-router-dom";

export const RegisterPage = () => {
    const context = useContext<ContextData>(Context);
    const navigate = useNavigate();
    const authService = new AuthService();
    const [error, setError] = useState<ErrorElement>(null);
    const [loginForm, showLoginForm] = useState<boolean>(true);

    const onLogin = (user: User) => {
        authService.registerPerson(user)
            .then(response => {
                context.person.id = response;
                showLoginForm(false);
            })
            .catch(() => setError(<>Вы уже зарегистрированы  {<Link path="/login" text="Войти"/>}</>));
    };

    const onRegister = (passport: Passport) => {
        authService.setPassport(context.person.id, passport)
            .then((response) => {
                console.log(response);
                context.person = response;
                navigate("/account");
            })
            .catch(() => setError(<>"При регистрации что-то пошло не так"</>))
    }

    return <div id="register_page" className={styles.registerPage}>
        <form id="register_form" className={styles.registerForm}>
            <Container spacing={4}>
                <Logo path="/home"/>
                <h3>Регистрация</h3>
                {error ?
                    <Alert severity="error" onClose={() => setError(null)}>{error}</Alert> : null}
                {loginForm ? <LoginForm onSubmitCallback={onLogin}/> : <PassportForm onSubmitCallback={onRegister}/>}
            </Container>
        </form>
    </div>
}