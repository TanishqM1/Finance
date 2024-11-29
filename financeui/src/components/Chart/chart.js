import React from "react";
import {Chart as ChartJs, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement,} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { UseGlobalContext } from "../../context/globalcontext";
// chartjs functionality imports


ChartJs.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement
)


//chart to display data using chat.js.
function DisplayChart() {
    const {incomes, expenses} = UseGlobalContext();

    //map DataItems (income) and reformatted date
    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return date.slice(0, 10)
        }),

        datasets: 
        [
            {label: 'Income',
            data: [...incomes.map((income)=> {
                    const {amount} = income
                    return amount
                })
            ],
            //styling for income part of graph. tension between .1 and .4 works best
            backgroundColor: 'green',
            tension:.2
            },
            
            {label: 'Expenses',
                data: [...expenses.map((expense)=> {
                        const {amount} = expense
                        return amount
                    })
                ],
                  //styling for expense part of graph.
                backgroundColor: 'red',
                tension: .2
                }
        ]
    }
    return (
        <Chartstyled>
            <Line data={data} />
        </Chartstyled>
    )
}

const Chartstyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default DisplayChart