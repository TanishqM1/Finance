import React from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../context/globalcontext";

function History(){
    
    const {TransactionHistory} = UseGlobalContext()

    const transactions = TransactionHistory();

    //function to export transaction history. incomes/expenses are styled to
    // red/green based on their type.
    return (

        <StyledHistory>
            <h2>Recent History</h2>
            {transactions.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key = {_id} class="transactionitem">
                        <p style= {{
                            color: type === 'income' ? 'green' : 'red'
                        }}>{title}</p>

                        <p style= {{
                            color: type === 'income' ? 'green' : 'red'
                        }}>{
                            type === 'expense' ? `-${amount}` : `+${amount}`
                        }</p>
                    </div>
                )
            })}
        </StyledHistory>
    )
}

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .transactionitem{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History