import React from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../context/globalcontext";

function History() {
    const { TransactionHistory } = UseGlobalContext();
    const transactions = TransactionHistory();

    return (
        <StyledHistory>
            <h2>Recent History</h2>
            {transactions.map((item) => {
                const { _id, title, amount, type } = item;
                console.log(item.type);
                // Determine color based on transaction type
                const textColor = type === 'income' ? 'green' : 'red';
                
                // Determine sign based on transaction type (positive for income, negative for expense)
                const displayAmount = type === 'expense' ? `-${amount}` : `+${amount}`;

                return (
                    <div key={_id} className="transactionitem">
                        <p style={{ color: textColor }}>{title}</p>
                        <p style={{ color: textColor }}>{displayAmount}</p>
                    </div>
                );
            })}
        </StyledHistory>
    );
}

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .transactionitem {
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

export default History;
