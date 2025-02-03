import styled from "styled-components";

export const Container = styled.div`

   
   input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 10px;
    padding: 1rem .8rem;
    width: 15rem;
   }

   ::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };
   }

`;