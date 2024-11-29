import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import DisplayChart from "../Chart/chart";
import { dollar } from "../../utils/icons";
import { UseGlobalContext } from "../../context/globalcontext";
import History from "./history";

function Dashboard() {
    
    const {TotalSalary, TotalExpense, TotalBalance, TransactionHistory, getIncome, getExpense } = UseGlobalContext()

    useEffect(() =>{
        getIncome();
        getExpense();

    })

    return (
        <DashoardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div class="stats-con">
                    <div class="chart-con">
                        <DisplayChart />
                        <div class="amount-con">
                            <div class="income">
                                <h2>Total Income</h2>
                                <p>{dollar} {TotalSalary()}</p>
                            </div>
                            <div class="expense">
                                <h2>Total Expense</h2>
                                <p>{dollar} {TotalExpense()}</p>
                            </div>
                            <div class="balance">
                                <h2>Total Balance</h2>
                                <p>{dollar}{TotalBalance()}</p>
                            </div>
                        </div>
                    </div>
                    <div class="history">
                    <History />
                    </div>  
                </div>
            </InnerLayout>
        </DashoardStyled>
    )
}

const DashoardStyled = styled.div`

margin: -2rem 1rem 1rem 1rem;

`

export default Dashboard