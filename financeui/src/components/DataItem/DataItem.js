import React from "react";
import styled from "styled-components";
import { bank, calender, clothing, comment, dine, dollar, donate, entertain, freelance, garbage, grocery, insurance, med, other, personal, rental, salary, save, socialincome, stocks, util } from "../../utils/icons";
import Button from "../Button/Button";

// IncomeItem is created for each item in "income", after we use "getIncomes"
function DataItem({
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
    const IncomeCategoryIcon = () =>{
        switch(category){
            case "salary":
                return salary;
            case "freelancing":
                return freelance;
            case "investments":
                return stocks;
            case "social":
                return socialincome;
            case "bank":
                return bank;
            case "other":
                return other;
        }
    }
    
    //Expense category 
    const ExpenseCategoryIcon = () =>{
        switch (category){
            case "rent":
                return rental;
            case "util":
                return util;
            case "grocery":
                return grocery;
            case "dining":
                return dine;
            case "insure":
                return insurance;
            case "aid":
                return med;
            case "save":
                return save;
            case "clothes":
                return clothing;
            case "personal":
                return personal;
            case "social":
                return entertain;
            case "donate":
                return donate;
            case "other":
                return other;
        }
    }  

    console.log('category:', category)
    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorcolor}>
            <div class="icon">
            {type === "expense" ? ExpenseCategoryIcon() : IncomeCategoryIcon()}
            </div>
            <div class="content">
                <h5>{[title]}</h5>
                <div class="inner-content">
                    <div class="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {date.slice(0, 10)}</p>
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
                        onClick={() => deleteitem(id)}
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
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #0ddeb8;

    .icon{
        color: black;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }   
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }


}

`;

export default DataItem