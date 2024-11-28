import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { UseGlobalContext } from "../../context/globalcontext";
import Form from '../Form/form'
import IncomeItem from "./IncomeItem";

function Incomes() {
    const {addIncome, incomes, getIncome, deleteIncome, TotalSalary} = UseGlobalContext()

    // Runs on initial render
    useEffect(()=> {
        getIncome();
    }, [])

    return (
        <IncomesStyled>
            <InnerLayout>
                <h2 class="total-income">Total Income:  <span>${TotalSalary()}</span></h2>
                <div class="income-content">
                    <div class="form-contrainer">
                        <Form/>
                    </div>
                    <div class="incomes">
                        {incomes.map((income) =>{
                            const {_id, title, amount, date, category, description} = income;
                            return <IncomeItem 
                            key={_id}
                            id = {_id}
                            title = {title}
                            amount = {amount}
                            date={date}
                            description = {description}
                            category={category}
                            indicatorcolor={"var(--color-green)"}
                            deleteitem = {deleteIncome}
                            />

                        })}
                        
                    </div>
                </div>
                
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
display: flex;
overflow: auto;
//total income banner at the top of "incomes" page.
.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba (0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: -2rem 1rem 1rem 1rem;
    font-size: 2rem;
    gap: .5rem;
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

export default Incomes