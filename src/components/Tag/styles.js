import styled from 'styled-components';

export const Container = styled.span`
   font-family: "Poppins";
   font-size: 1.2rem;
   font-weight: 200;
   padding: .24rem .5rem;
   border-radius: .3rem;
   color: ${({ theme }) => theme.COLORS.LIGHT_100};
   background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;