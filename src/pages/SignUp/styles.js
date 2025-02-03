import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 4.3rem 7.5rem 5.93rem 6.875rem;

  #logo {
    margin-bottom: 3rem;
  border: none;

  display: flex;
  align-items: center;
  gap: .625rem;

  > img {
    width: 3.4rem;
    height: 3.4rem;
  }

  > h1 {
    font-weight: bold;
    font-size: 2.85rem;
    white-space: nowrap;
  }
  }

  form h1, #link {
    font-family: "Poppins";
    font-weight: 400;
  }


  .input {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
    .input input {

     width: 21rem;
     border-radius: .625rem;

     padding: .8rem 12px;





     color: ${({ theme }) => theme.COLORS.LIGHT_100};
     background-color: ${({ theme }) => theme.COLORS.DARK_900};
     border: 0;

     &::placeholder {
     color: ${({ theme }) => theme.COLORS.LIGHT_500};
     font-size: .95rem;
     }
    }

    form {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        padding: 2.5rem 3rem;
        border-radius: 1rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        gap: 1.3rem;

        #link {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            color: inherit;
        }

    }
`;