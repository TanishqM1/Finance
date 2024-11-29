import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button"; // Adjust the path
import { addicon } from "../../utils/icons"; // Adjust the path
import { Line } from 'react-chartjs-2'; // Import the Line chart component
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function StockForm() {
  const [stockCode, setStockCode] = useState("");
  const [stockData, setStockData] = useState(null); // Store fetched stock data
  const [error, setError] = useState(""); // Error state for any fetch issues

  const handleInput = (name) => (e) => {
    if (name === "stockCode") setStockCode(e.target.value);
  };

  const fetchStockData = async (stockCode) => {
    const apiKey = "BUDUrpZgHpnOOUsDI2GZG8vSUkda8pnW"; // Your API key
    const url = `https://api.polygon.io/v2/aggs/ticker/${stockCode}/range/1/week/2023-01-09/2024-02-10?apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch stock data");
      }
      const data = await response.json();
      if (data.results) {
        setStockData(data.results);
        setError(""); // Clear error if data is fetched successfully
        console.log("Fetched Stock Data:", data.results); // Log the stock data to the console
      } else {
        setError("No data available for the specified stock code.");
      }
    } catch (error) {
      setError(error.message); // Handle errors during the fetch
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stockCode.trim() !== "") {
      fetchStockData(stockCode);
      setStockCode(""); // Clear input field after submission
    } else {
      console.log("Please enter a stock code.");
    }
  };

  // Prepare data for chart
  const chartData = stockData ? {
    labels: stockData.map(item => new Date(item.t).toLocaleDateString()), // Dates
    datasets: [
      {
        label: "Open",
        data: stockData.map(item => item.o), // Open prices
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: false,
      },
      {
        label: "Close",
        data: stockData.map(item => item.c), // Close prices
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        fill: false,
      },
    ]
  } : {};

  // Customize chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Stock Price Graph for ${stockCode.toUpperCase()}`,
        color: '#0ddeb8', // Title color
        font: {
          size: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis tick color (label color)
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Keep default grid line color (light gray)
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis tick color (label color)
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Keep default grid line color (light gray)
        },
      },
    },
  };

  return (
    <StockFormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={stockCode}
          name={"stockCode"}
          placeholder="Enter stock code (e.g., AAPL)"
          onChange={handleInput("stockCode")}
        />
      </div>
      <div className="submit-btn">
        <Button
          name={"Submit Stock Code"}
          icon={addicon}
          bPad={".8rem 1.6rem"}
          bRadius={"30px"}
          color={"#1b9680"}
          bg={"var(--color-accent)"}
        />
      </div>

      {/* Display Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Render the Line Chart */}
      {stockData && (
        <div className="stock-chart">
          
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </StockFormStyled>
  );
}

const StockFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 20px;
  width: 100%;

  .input-control {
    input {
      font-family: cursive;
      font-size: inherit;
      outline: none;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: 2px solid #c2c0c0;
      background: transparent;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      color: #0ddeb8;
      font-weight: bold;
      width: 100%;

      &::placeholder {
        color: #1b9680;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:focus {
        border-color: #1b9680;
      }

      &:focus::placeholder {
        color: transparent;
      }
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      font-weight: bold;
      display: block;

      &:hover {
        background: #0ddeb8 !important;
        color: black !important;
        font-size: larger !important;
        border-radius: 30px !important;
      }
    }
  }

  .stock-chart {
    width: 100%;
    height: 100%;
    

    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .error-message {
    color: red;
    font-weight: bold;
  }
`;

export default StockForm;
