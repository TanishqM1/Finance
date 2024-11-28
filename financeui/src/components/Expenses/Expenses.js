import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { UseGlobalContext } from "../../context/globalcontext";
import Form from '../Expenses/ExpenseForm'
import DataItem from "../DataItem/DataItem";

function Expenses() {
    const {addIncome, expenses, getExpense, deleteExpense, TotalExpense} = UseGlobalContext()

    // Runs on initial render
    useEffect(()=> {
        getExpense();
    }, [])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h2 class="total-income">Total Expense:  <span>${TotalExpense()}</span></h2>
                <div class="income-content">
                    <div class="form-contrainer">
                        <Form/>
                    </div>
                    <div class="incomes">
                        {expenses.map((expense) =>{
                            const {_id, title, amount, date, category, description, type} = expense;
                            return <DataItem 
                            key={_id}
                            id = {_id}
                            title = {title}
                            amount = {amount}
                            type = {'expense'}
                            date={date}
                            description = {description}
                            category={category}
                            indicatorcolor={"var(--color-green)"}
                            deleteitem = {deleteExpense}
                            />

                        })}
                        
                    </div>
                </div>
                
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
display: flex;
overflow: auto;
//total income banner at the top of "incomes" page.
.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #28282A;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba (0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: -2rem 1rem 1rem 1rem;
    font-size: 2rem;
    gap: .5rem;
    color: #1b9680;
    font-family: cursive;
}
    .income-content{
        display: flex;
        gap: 8rem;
        align-items: start ;
        .incomes{
            flex: 1;

        }
    }
`

export default Expenses