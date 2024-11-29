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

    },[])

    return (
        <DashboardStyled>
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
                    <div class="salary-itm"> 
                        {/* not implemented */}
                    </div>
                    </div>  
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
h1{
    margin-bottom: 1rem;
}
h2{
    color: #0ddeb8;
}
    .stats-con{
        font-family: cursive;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            margin-left: 1rem;
            grid-column: 1 / 5;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    color: #1b9680;
                    background: #28282A;
                    border: 2px solid black;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2rem;
                    border-color: black;
                    background-color: #28282A;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 2rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard