import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .tags {
    padding: .5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    display: flex;
    gap: 1rem;
    border-radius: .5rem;


  }


  #space {

    a {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-decoration: none;
        color: inherit;
        max-width: 100px;
    }
    
    a svg{
        height: 2rem;
        width: 2rem;
    }
  }
`;

export const Main = styled.div`
  padding: 2rem 7.5rem 3rem;

  > h1 {
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .row {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }

  #button {
    width: 8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: .3rem;
    padding: .7rem 0;
  }

  #buttons {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
  }

  input[type="number"]::-webkit-inner-spin-button, 
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  #Choice {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: none;
    border-radius: 10px;
    padding: 1rem .8rem 1rem 2.6rem;
    width: 100%;

    appearance: none; /* Remove o ícone padrão */
    -webkit-appearance: none; /* Remove no Safari/Chrome */
    -moz-appearance: none; /* Remove no Firefox */
  }

  svg:nth-child(2)  {
    position: absolute;
    padding-top: .7rem;
    padding-left: .6rem;
    pointer-events: none; 
    width: 2rem;
    height: 2rem;
  }

  #Choice option {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }


`;