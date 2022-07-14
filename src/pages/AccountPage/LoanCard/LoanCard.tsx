import React from "react"
import {LoanInformation} from "../../../utils/types";
import {Container} from "../../../components/Container/Container";

import styles from "./LoanCard.module.css"
import {Button} from "../../../components/Button/Button";

interface LoanCardProps {
    loanInformation: LoanInformation
}

export const LoanCard = ({loanInformation}: LoanCardProps) => {
    return <div id={`loan_${loanInformation.id}_card`} className={styles.loanCard}>
        <Container spacing={4}>
            <h2>Займ: {loanInformation.loanAmount} рублей</h2>
            <h3>Осталось выплатить: {loanInformation.amountLeft}</h3>
            <h3>Дата займа: {loanInformation.startDate}</h3>
            <h3>Срок погашения: {loanInformation.expirationDate}</h3>
            <Button>Погасить</Button>
        </Container>
    </div>
}