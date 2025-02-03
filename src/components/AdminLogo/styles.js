import styled from "styled-components";

export const Container = styled.div`

  white-space: nowrap;
  div {
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: .625rem;
  }

  border: none;

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }

  > h1 {
    font-weight: bold;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-family: "Roboto";
    width: 48px;
    padding-left: 11.7rem;
    margin-top: -.65rem;

  }
`;