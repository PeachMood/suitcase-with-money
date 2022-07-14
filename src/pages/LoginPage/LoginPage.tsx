import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Button} from "../../components/Button/Button";
import {Row} from "../../components/Row/Row";
import {Link} from "../../components/Link/Link";
import {ErrorMessage, LoginData} from "../../utils/types";
import {Context} from "../../index";
import {Alert} from "@mui/material";
import AuthService from "../../services/AuthorizationService";
import InputMask from "react-input-mask";
import Input from "../../components/Input/Input";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    const store = useContext(Context);
    const [submitError, setSubmitError] = useState<ErrorMessage>(null);
    const {register, formState: {errors}, handleSubmit,} = useForm<LoginData>({
        defaultValues: {login: "", password: ""},
        mode: "onBlur"
    });
    const {ref: loginRef, ...loginProps} = register("login", {required: "Пожалуйста, укажите номер телефона"});
    const {ref: passwordRef, ...passwordProps} = register("password", {required: "Пожалуйста, укажите номер пароль"});

    const onSubmit = (data: LoginData) => {
        const authService = new AuthService();
        if (store.checkAuth()) {
            setSubmitError("Вы уже авторизованы");
            return;
        }
        authService.login(data)
            .then(response => {
                store.setStoreData(response!.idPerson);
                store.setAuth(true);
                setSubmitError(null);
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
                    type="password"
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