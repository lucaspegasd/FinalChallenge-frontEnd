import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border: none;

  display: flex;
  align-items: center;
  padding: 1.25rem 4rem;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};


   #button {
    background: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
  }
`;