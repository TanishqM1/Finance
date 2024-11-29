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
                const textColor = type === 'income' ? '#17ED5B' : '#E22B2B';
                
                // Determine sign based on transaction type (positive for income, negative for expense)
                const displayAmount = type === 'expense' ? `- ${amount}` : `+ ${amount}`;

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
    gap: .8rem;

    .transactionitem {
        font-size: medium;
    background: #2C2C2C;
    border: 2px solid black;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px; /* Adjust the minimum width to allow more space */
    width: auto; /* Ensures the width adjusts based on content */
    white-space: nowrap; /* Prevents text from wrapping to a new line */
    overflow: hidden; /* Prevents overflow, if needed */
    text-overflow: ellipsis; /* Adds ellipsis when text overflows */

    }
`;

export default History;
