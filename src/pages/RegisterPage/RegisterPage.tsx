import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Alert } from "@mui/material";
import { ErrorElement, User, Passport } from "../../utils/types";
import { LoginForm } from "./LoginForm/LoginForm";
import { PassportForm } from "./PassportForm/PassportForm";
import { Context, ContextType } from "../../roots/ContextProvider/ContextProvider";

import styles from "./RegisterPage.module.css";

export const RegisterPage = () => {
  const context = useContext<ContextType>(Context);
  const navigate = useNavigate();
  const [error, setError] = useState<ErrorElement>(null);
  const [loginForm, showLoginForm] = useState<boolean>(true);

  const onLogin = (user: User) => {
    context?.setPerson({ ...user, id: 1 });
    showLoginForm(false);
  };

  const onRegister = (passport: Passport) => {
    context?.setPerson({ ...context?.person, ...passport });
    navigate("/account", { replace: true });
  }

  return <div id="register_page" className={styles.registerPage}>
    <form id="register_form" className={styles.registerForm}>
      <Container spacing={4}>
        <Logo path="/home" />
        <h3>Регистрация</h3>
        {error ?
          <Alert severity="error" onClose={() => setError(null)}>{error}</Alert> : null}
        {loginForm ? <LoginForm onSubmitCallback={onLogin} /> : <PassportForm onSubmitCallback={onRegister} />}
      </Container>
    </form>
  </div>
}
