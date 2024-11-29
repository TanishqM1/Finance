import React from "react";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { UseGlobalContext } from "../../context/globalcontext";

// Register chart.js components
ChartJs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
);

function DisplayChart() {
    const { incomes, expenses } = UseGlobalContext();

    // Prepare chart data with labels (dates) and income/expense values
    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return date.slice(0, 10); // Format date to YYYY-MM-DD
        }),

        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => {
                    const { amount } = income;
                    return amount;
                }),
                borderColor: 'green', // Set border color for the income line
                backgroundColor: 'rgba(0, 128, 0, 0.2)', // Set background color for income area
                tension: 0.2, // Line smoothness
                fill: true, // Fill under the line
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => {
                    const { amount } = expense;
                    return amount;
                }),
                borderColor: 'red', // Set border color for the expense line
                backgroundColor: 'rgba(255, 0, 0, 0.2)', // Set background color for expense area
                tension: 0.2, // Line smoothness
                fill: true, // Fill under the line
            }
        ]
    };

    // Customize chart options
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Income vs Expenses',
                color: '#0ddeb8', // Title color
                font: {
                    size: 20,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
                bodyColor: 'white', // Tooltip text color
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // X-axis label color
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Grid line color
                },
            },
            y: {
                ticks: {
                    color: 'white', // Y-axis label color
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Grid line color
                },
            },
        },
    };

    return (
        <ChartStyled>
            <Line data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #28282A; /* Grey background for the chart */
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    
    /* Flexbox to center the canvas */
    display: flex;
    justify-content: center;  /* Horizontally center canvas */
    align-items: center;      /* Vertically center canvas */
    
    /* Ensure canvas takes full available width and height */
`;



export default DisplayChart;
