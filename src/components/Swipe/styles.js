import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

 > h1 {
    font-weight: 400;
    font-size: 2.3rem;
    margin-bottom: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
  }

 .swiper {
  width: 100%;
  height: auto;
 }

 .swiper-slide {
  width: auto !important; /* Permite que o Swiper ajuste automaticamente */
  display: flex;
  justify-content: center;
  align-items: center;
}


 .swiper-button-next,
 .swiper-button-prev {
  color: #fff; /* Ajusta a cor dos botões */
  position: absolute;
 }

 .swiper-pagination-bullet {
  background: 000; /* Ajusta a cor da paginação */
 }

`;