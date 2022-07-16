import React from "react"
import {Loan} from "../../../utils/types";
import {Container} from "../../../components/Container/Container";

import styles from "./LoanCard.module.css"
import {Button} from "../../../components/Button/Button";

interface LoanCardProps {
    loan: Loan;
}

export const LoanCard = ({loan}: LoanCardProps) => {
    return <div id={`loan_${loan.id}_card`} className={styles.loanCard}>
        <Container spacing={4}>
            <h3 className={styles.title}><b>Займ: {loan.loanAmount} рублей</b></h3>
            <h3>Осталось выплатить: {loan.amountLeft} рублей</h3>
            <h3>Дата займа: {loan.startDate}</h3>
            <h3>Срок погашения: {loan.expirationDate}</h3>
            <Button>Погасить</Button>
        </Container>
    </div>
}