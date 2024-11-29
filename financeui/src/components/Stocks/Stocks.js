import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button"; // Adjust the path
import { addicon } from "../../utils/icons";
// Adjust the path

function StockForm() {
    
  const [stockCode, setStockCode] = useState("");

  const handleInput = (name) => (e) => {
    if (name === "stockCode") setStockCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stockCode.trim() !== "") {
      console.log("Submitted Stock Code:", stockCode);
      setStockCode(""); // Clear input field
    } else {
      console.log("Please enter a stock code.");
    }
  };

  return (
    <StockFormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={stockCode}
          name={"stockCode"}
          placeholder="Enter stock code (e.g., MSFT)"
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
        justify-content: center; /* Centers the button horizontally */
        align-items: center;    /* Centers the button vertically if needed */
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
  justify-content: center; /* Centers the button horizontally */
  align-items: center;    /* Centers the button vertically if needed */

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

`;

export default StockForm;
