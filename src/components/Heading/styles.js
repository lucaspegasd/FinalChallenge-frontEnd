import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.DARK_600 };

  
  border: none;
  border-radius: .5rem;
  margin-bottom: 3.8rem;

  
  > img {
    width: 41rem;
    height: 25rem;
    border: none;
    margin-bottom: -0.875rem;
    margin-left: -4.375rem;
    margin-top: -8.625rem;

  }

  #text {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-end;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };

    margin: 4.6rem 6.25rem 4.9rem 0;
    
    h1 {
     font-weight: 500;
     font-size: 2.9rem;
     white-space: nowrap;
     font-family: "Poppins";

    }

    p {
      white-space: nowrap;
      font-size: 1rem;
      font-family: "Poppins";

    }
  }


`;