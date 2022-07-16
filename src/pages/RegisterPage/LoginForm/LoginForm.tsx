import React from "react";
import {useForm} from "react-hook-form";
import {User} from "../../../utils/types";
import InputMask from "react-input-mask";
import Input from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";

interface LoginFormProps {
    onSubmitCallback: (user: User) => void;
}

export const LoginForm = ({onSubmitCallback}: LoginFormProps) => {
    const {register, formState: {errors}, handleSubmit,} = useForm<User>({
        defaultValues: {login: "", password: ""},
        mode: "onBlur"
    });
    const {ref: loginRef, ...loginProps} = register("login", {required: "Пожалуйста, укажите номер телефона"});
    const {ref: passwordRef, ...passwordProps} = register("password", {
        required: "Пожалуйста, укажите пароль",
        minLength: {value: 8, message: "Пароль должен содержать не мене 8 символов"},
        maxLength: {value: 16, message: "Пароль должен содержать не более 16 символов"},
        pattern: {value: RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z])/g), message: " Пароль должен состоять только из латинских символовов и цифр"},
    });

    return <>
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
                    type="text"
                    autoComplete="new-password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : null}
                    inputRef={passwordRef}
                    {...passwordProps}/>
                <Button type="submit" onClick={handleSubmit(onSubmitCallback)}>Далее</Button>
        </>
}