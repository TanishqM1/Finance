import React from "react";
import styled from "styled-components";
import { calender, comment, dollar, garbage } from "../../utils/icons";
import Button from "../Button/Button";

// IncomeItem is created for each item in "income", after we use "getIncomes"
function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteitem,
    indicatorcolor,
    type
}) {
    return (
        <IncomeItemStyled>
            <div class="icon">

            </div>
            <div class="content">
                <h5>{[title,category]}</h5>
                <div class="inner-content">
                    <div class="text">
                        <p>{dollar} 45</p>
                        <p>{calender} {date}</p>
                        <p>{comment} {description}</p>
                    </div>
                    <div class="btn-con">
                        <Button
                        icon={garbage}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        />

                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #28282A;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #0ddeb8;
`;

export default IncomeItem