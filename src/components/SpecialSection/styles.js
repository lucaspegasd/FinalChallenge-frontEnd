import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    margin-bottom: 1rem;
  }
`;