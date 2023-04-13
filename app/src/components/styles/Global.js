import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    font-family: 'Poppins', sans-serif;  
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGrey};

   

    h1, p{
        margin: 0;
    } 
   
}


`;

export default GlobalStyles;
