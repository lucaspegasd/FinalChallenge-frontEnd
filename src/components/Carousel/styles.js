import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    font-weight: 400;
    font-size: 2.3rem;
    margin-bottom: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
  }

`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 


  .carousel {
    overflow: hidden;
    position: relative;
  }

  .carousel-items {
    display: flex;
    gap: 1.5rem;
    transition: transform 0.3s ease-in-out;
  }

  .carousel-card {
    min-width: 300px;
    margin: 0 10px;
  }

  .arrow {
    position: absolute;


  }

  .arrow button {
    position: absolute;
    top: 50%;  
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    z-index: 10;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  }

  .arrow.left {
    left: 0;
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
    background: linear-gradient(to right,hsl(200, 100.00%, 2.90%), transparent);
  }

  .arrow.right {
    right: 0;
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(to left, #000A0F, transparent);
  }

  .arrow:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;