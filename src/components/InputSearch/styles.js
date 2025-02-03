import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};


  border: none;

   display: flex;
   gap: .75rem;
   padding: .75rem 9.03125rem;
   align-items: center;

   border-radius: .625rem;

   margin-top: .2rem;

   > input {

     width: 21rem;
     

     display: flex;
     justify-content: center;


     color: ${({ theme }) => theme.COLORS.LIGHT_100};
     background: transparent;
     border: 0;

     &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
     }

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

       
    }
  }
`;