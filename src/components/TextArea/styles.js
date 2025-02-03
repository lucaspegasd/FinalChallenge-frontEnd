import styled from "styled-components";

export const Container = styled.div`

   
   textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 10px;
    padding: 1rem .8rem;
    width: 100%;
    height: 10rem;
   }

   ::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };
   }

`;