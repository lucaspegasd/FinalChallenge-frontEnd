import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  padding: 1rem 4.5rem;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-size: .8rem;

 
  bottom: 0; 
  left: 0; 
  z-index: 1000; 

  div {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    display: flex;
    gap: .625rem;

    h1 {
      font-weight: bold;
      font-size: 1.75rem;
      white-space: nowrap;
    }
  }

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;
