import React, { FC } from "react";
import { Grid } from "@mui/material";
import { LoanCard } from "./LoanCard/LoanCard";
import { Loan } from "../../utils/types";

import styles from "./AccountPage.module.css";

const loans: Loan[] = [
  {
    id: 1,
    title: "jdnv",
    amountLeft: 200,
    loanAmount: 4000,
    rate: 0.15,
    days: 8,
    startDate: "14-03-2021",
    expirationDate: "22-03-2021"
  },
  {
    id: 1,
    title: "jdnv",
    amountLeft: 10000,
    loanAmount: 30000,
    rate: 0.15,
    days: 8,
    startDate: "08-03-2021",
    expirationDate: "08-03-2021"
  },
]

export const AccountPage: FC = () => {
  return <div id="account_page" className={styles.accountPage}>
    <h2>Ваши займы</h2>
    <Grid container spacing={5}>
      {loans.map(loan => <Grid item><LoanCard loan={loan} /></Grid>)}
    </Grid>
  </div>
}
