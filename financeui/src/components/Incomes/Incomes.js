import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { UseGlobalContext } from "../../context/globalcontext";
import Form from '../Form/form'
import IncomeItem from "./IncomeItem";

function Incomes() {
    const {addIncome, incomes, getIncome} = UseGlobalContext()

    // Runs on initial render
    useEffect(()=> {
        getIncome();
    }, [])

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                
                <div class="income-content">
                    <div class="form-contrainer">
                        <Form/>
                    </div>
                    <div class="incomes">
                        {incomes.map((income) =>{
                            const {id, title, amount, date, category, description} = income;
                            return <IncomeItem></IncomeItem>
                        })}
                        
                    </div>
                </div>
                
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`


`

export default Incomes