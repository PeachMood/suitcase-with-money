import React, {useState} from "react"
import { Button } from "../../../components/Button/Button";
import { Slider } from "../../../components/Slider/Slider";
import { Container } from "../../../components/Container/Container";
import { Row } from "../../../components/Row/Row";

import styles from "./LoanForm.module.css";

export const LoanForm = () => {
    const [amount, setAmount] = useState("10000");
    const [terms, setTerms] = useState("30");

    const declineTerm = (term: string): string => {
        const value = parseInt(term)
        const text = (value === 1 || (value > 19 && value % 10 === 1)) ? " день" :
            ((value > 1 && value < 5) || (value > 19 && value % 10 > 1 && value % 10 < 5)) ? " дня" : " дней";
        return value + text;
    }

    return <div id="loan_form" className={styles.loanForm}>
        <Container spacing={6}>
            <h2>Первый займ</h2>
            <Row justifyContent="space-between">
                <h3>Выберите сумму:</h3>
                <h3>{amount} рублей</h3>
            </Row>
            <Slider min={1000} max={50000} step={1000} value={amount} onChange={event => setAmount(event.target.value)}/>
            <Row justifyContent="space-between">
                <h3>Выберите срок:</h3>
                <h3>{declineTerm(terms)}</h3>
            </Row>
            <Slider min={7} max={60} step={1} value={terms} onChange={event => setTerms(event.target.value)}/>
            <Row justifyContent="space-between">
                <h3>Сумма к погашению:</h3>
                {/*TODO вынести вычисление суммы отдельно*/}
                <h3>{Math.round(parseInt(amount) * 1.12)} рублей</h3>
            </Row>
            <Button>Получить деньги</Button>
        </Container>
    </div>;
}