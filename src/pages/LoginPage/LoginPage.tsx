import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Button} from "../../components/Button/Button";
import {Row} from "../../components/Row/Row";
import {Link} from "../../components/Link/Link";
import {ErrorMessage, User} from "../../utils/types";
import {Alert} from "@mui/material";
import AuthService from "../../services/AuthorizationService";
import InputMask from "react-input-mask";
import Input from "../../components/Input/Input";
import {Context} from "../../roots/ContextProvider/ContextProvider";
import AccountService from "../../services/AccountService";
import {useNavigate} from "react-router-dom";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    const context = useContext(Context);
    const navigate =  useNavigate();
    const [submitError, setSubmitError] = useState<ErrorMessage>(null);
    const {register, formState: {errors}, handleSubmit,} = useForm<User>({
        defaultValues: {login: "", password: ""},
        mode: "onBlur"
    });
    const {ref: loginRef, ...loginProps} = register("login", {required: "Пожалуйста, укажите номер телефона"});
    const {ref: passwordRef, ...passwordProps} = register("password", {required: "Пожалуйста, укажите номер пароль"});

    const onLogin = (idPerson: number) => {
        const accountService =  new AccountService(idPerson);
        accountService.getPersonInformation().then(response => {
            context.person = response;
            context.isAuthorized = true;
            navigate("/account");
        }).then(() => setSubmitError("Неверный логин или пароль"));
    }

    const onSubmit = (user: User) => {
        const authService = new AuthService();
        authService.login(user)
            .then(response => {
                onLogin(response!);
            })
            .catch(() => setSubmitError("Неверный логин или пароль"));
    };

    return <div id="login_page" className={styles.loginPage}>
        <form id="authorization_form" className={styles.authorizationForm}>
            <Container spacing={4}>
                <Logo path="/home"/>
                {submitError ?
                    <Alert severity="error" onClose={() => setSubmitError(null)}>{submitError}</Alert> : null}
                <InputMask mask="+7 (999) 999 - 99 - 99" inputRef={loginRef} {...loginProps}>
                    <Input
                        label="Телефон"
                        type="text"
                        autoComplete="tel"
                        error={!!errors.login}
                        helperText={errors.login ? errors.login.message : null}
                        {...loginProps}
                        inputRef={loginRef}/>
                </InputMask>
                <Input
                    label="Пароль"
                    autoComplete={"current-password"}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : null}
                    inputRef={passwordRef}
                    {...passwordProps}/>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>Войти</Button>
                <Row justifyContent="center" spacing={2}>
                    <p>Нет аккаунта?</p>
                    <Link text="Регистрация" path="/register"/>
                </Row>
            </Container>
        </form>
    </div>
}