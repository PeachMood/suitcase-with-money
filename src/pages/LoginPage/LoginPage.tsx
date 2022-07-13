import React, {useState} from "react";
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Button} from "../../components/Button/Button";
import {Row} from "../../components/Row/Row";
import {Link} from "../../components/Link/Link";
import Input from "../../components/Input/Input";

import styles from "./LoginPage.module.css";

interface LoginData {
    login: string;
    password: string;
}

type ErrorMessage = string

export const LoginPage = () => {
    const [submitError, setSubmitError] = useState<ErrorMessage>();
    const {register, formState: {errors}, handleSubmit, } = useForm<LoginData>({
        defaultValues: { login: "", password: "" },
        mode: "onBlur"
    });
    const { ref: loginRef, ...loginProps } = register("login", {required: "Пожалуйста, укажите номер телефона"});
    const { ref: passwordRef, ...passwordProps } = register("password", {required: "Пожалуйста, укажите номер пароль"});

    const onSubmit = (data: any) => console.log(data);

    return <div id="login_page" className={styles.loginPage}>
        <form id="authorization_form" className={styles.authorizationForm}>
            <Container spacing={4}>
                <Logo/>
                <InputMask mask="+7 (999) 999 - 99 - 99" inputRef={loginRef} {...loginProps}>
                    <Input
                        label="Телефон"
                        type="text"
                        autoComplete="tel"
                        error={!!errors.login}
                        helperText={errors.login ? errors.login.message : null}
                        {...loginProps}
                        inputRef={loginRef} />
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
                <Row justifyContent="center">
                    <p>Нет аккаунта?</p>
                    <Link text="Регистрация" path="/register"/>
                </Row>
            </Container>
        </form>
    </div>
}