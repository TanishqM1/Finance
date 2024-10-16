import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { UseGlobalContext } from "../../context/globalcontext";

function Incomes() {
    const {addIncome} = UseGlobalContext()
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                
                <div class="income-content">
                    <div class="form-contrainer"></div>
                    <div class="incomes">
                        
                    </div>
                </div>
                
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`


`

export default Incomes