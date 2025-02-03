import styled from "styled-components";

export const Container = styled.div`
   font-family: "Poppins";
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: space-between;
  #space {
    padding: 0 7.5rem 1.3rem 7.5rem ;

    a {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }

  > div {

    width: 100%;

    #info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    h1 {
        line-height: 3.8rem;
        font-size: 3.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300 }
    }

    #description {
        font-size: 1.9rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_300 }
    }

    #tags {
        display: flex;
        gap: .75rem;
    }
  }

  #bottom {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 18rem;

    #numbers {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.3rem;
        font-family: "Roboto";
    }

    #numbers svg {
        width: 1.4rem;
        height: 1.4rem;
    }
  }

`;