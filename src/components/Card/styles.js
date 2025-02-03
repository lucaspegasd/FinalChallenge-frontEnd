import styled from "styled-components"

export const Container = styled.div`




    border-radius: .5rem;



    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    width: 18rem;
    height: 27rem;

    #content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;

        gap: .9rem;
    }

    > svg {

        font-size: 1.5rem;
        margin-right: 1rem;
        margin-left: 15.5rem;
        margin-top: .7rem;
        position: absolute;
        
    }

    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
    }

    a {
        font-family: 'Poppins';
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        display: flex;
        white-space: nowrap;
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
        font-size: 1.1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.CAKE_100};  
        font-weight: 400;
    }

    #bottom {
        display: flex;
        align-items: center;
        gap: 1rem;

        width: 13rem;
    }

    #numbers {
        display: flex;
        align-items: center;
        gap: .8rem;
        font-size: 1.5rem;
    }

    #numbers svg {
        font-size: 1.5rem;
    }
`;