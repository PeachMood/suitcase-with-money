import React, {useState} from "react"
import { Button } from "../../../components/Button/Button";
import { Slider } from "../../../components/Slider/Slider";

import styles from "./LoanForm.module.css"

export const LoanForm = () => {
    const [amount, setAmount] = useState("1000");
    const [terms, setTerms] = useState("30");

    const declineTerm = (term: string): string => {
        const value = parseInt(term)
        const text = (value === 1 || (value > 19 && value % 10 === 1)) ? " день" :
            ((value > 1 && value < 5) || (value > 19 && value % 10 > 1 && value % 10 < 5)) ? " дня" : " дней";
        return value + text;
    }

    return <div id="form" className={styles.loanForm}>
        <h2>Первый займ</h2>
        <span className={styles.text}>
                <h3>Выберите сумму:</h3>
                <h3>{amount} рублей</h3>
            </span>
        <Slider min={1000} max={50000} step={1000} value={amount} onChange={event => setAmount(event.target.value)}/>
        <span className={styles.text}>
                <h3>Выберите срок:</h3>
                <h3>{declineTerm(terms)}</h3>
        </span>
        <Slider min={7} max={60} step={1} value={terms} onChange={event => setTerms(event.target.value)}/>
        <Button>Получить деньги</Button>
    </div>;
}