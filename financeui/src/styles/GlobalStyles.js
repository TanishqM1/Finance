import {createGlobalStyle} from 'styled-components'

export const GStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}

body{
    font-family: 'Open Sans';
    font-size: clamp(1rem, 1.5w, 1.2rem);
    overflow: hidden;
    color: rgba(34, 34, 96, .6);
    border-style: solid;
    border-color: black;
}

h1,h2,h3,h4,h5,h6{
    
}

`