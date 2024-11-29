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
            backgroundColor: 'green'
            },
            {label: 'Expenses',
                data: [...expenses.map((expense)=> {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red'
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

`;

export default DisplayChart