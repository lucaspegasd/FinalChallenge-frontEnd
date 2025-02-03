import styled from "styled-components";

export const Container = styled.div`
 
 
  svg { 
    width: 1.5rem;
    height: 1.5rem;
   }
   
   label {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 10px;
    padding: .9rem .8rem;
    width: 15rem;
    display: flex;
    align-items: center;
    gap: .5rem;
   }

   input {

    display: none;
   }

   ::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };
   }

`;