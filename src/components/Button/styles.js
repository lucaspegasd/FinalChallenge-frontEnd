import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: .7rem 0;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
`;