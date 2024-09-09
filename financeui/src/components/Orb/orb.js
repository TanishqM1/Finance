import React from "react";
import styled from "styled-components";

function Orb() {

  const OrbStyled = styled.div`
   
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: -37vh;
    background: linear-gradient(180deg, grey 0%, black 100%);
    filter: blur(5px);
  `;

  return <OrbStyled></OrbStyled>;
}

export default Orb;
