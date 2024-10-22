import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";

// Determining properties for each individual button, dependent on the page we are exporting this to.
function Button({name, icon, onClick, bg, bPad, color, bRadius}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            radius: bRadius,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-size: inherit;
    font-weight: bold;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    border-radius: 5px;
`;


export default Button