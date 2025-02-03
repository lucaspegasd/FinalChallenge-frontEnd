import styled from "styled-components";

export const Container = styled.button`
  width: 10.5rem;
  padding: .7rem 0;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

  border: none;
  border-radius: .3rem;
  gap: .4rem;
`;