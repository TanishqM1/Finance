import React, {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components";

function Orb() {

    const generateRandomKeyframes = () => {
        // Randomly generate positions for each keyframe (between 0 and the width/height of the screen)
        const randomX = () => Math.floor(Math.random() * window.innerWidth) + "px";
        const randomY = () => Math.floor(Math.random() * window.innerHeight) + "px";
    
        return keyframes`
          0% {
            transform: translate(${randomX()}, ${randomY()});
          }
          25% {
            transform: translate(${randomX()}, ${randomY()});
          }
          50% {
            transform: translate(${randomX()}, ${randomY()});
          }
          75% {
            transform: translate(${randomX()}, ${randomY()});
          }
          100% {
            transform: translate(${randomX()}, ${randomY()});
          }
        `;
      };
    
      const [moveOrb, setMoveOrb] = useState(generateRandomKeyframes);
    
      // Re-generate the keyframes whenever the window is resized
      useEffect(() => {
        const handleResize = () => {
          setMoveOrb(generateRandomKeyframes());
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  const OrbStyled = styled.div`
   
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
    margin-top: -45vh;
    margin-left: -45vh;
    background: linear-gradient(90deg, rgba(73, 72, 72, 0.8) 0%, black 100%);
    filter: blur(40px);
    animation: ${moveOrb} 10s alternate linear infinite;
  `;

  return <OrbStyled></OrbStyled>;
}

export default Orb;
