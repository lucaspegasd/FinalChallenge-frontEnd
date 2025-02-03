import styled from "styled-components";

export const Container = styled.div`


  border: none;

  display: flex;
  align-items: center;
  gap: .625rem;

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }

  > h1 {
    font-weight: bold;
    font-size: 1.5rem;
    white-space: nowrap;
  }
`;