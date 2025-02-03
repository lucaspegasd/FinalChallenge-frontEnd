import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card } from "../Card/index.jsx";
import { Container } from "./styles.js";

export function Swipe({ title }) {
  const cards = [
    {
      id: 1,
      title: "Prugna Pie",
      price: "79,97",
      description: "Torta de ameixa...",
      image: "https://github.com/lucaspegasd.png",
    },
    {
      id: 2,
      title: "Peachy Pastrie",
      price: "32,97",
      description: "Delicioso folhado de amendoas do para com castanhas argen",
      image: "image2.jpg",
    },
    {
      id: 3,
      title: "Macarons",
      price: "79,97",
      description: "Farinha de amêndoas...",
      image: "image3.jpg",
    },
    {
      id: 4,
      title: "Bolo de Chocolate",
      price: "59,97",
      description: "Clássico bolo...",
      image: "image4.jpg",
    },
    {
      id: 5,
      title: "Tarte de Limão",
      price: "49,97",
      description: "Sobremesa refrescante...",
      image: "image5.jpg",
    },
    {
      id: 6,
      title: "Croissant",
      price: "25,00",
      description: "Clássico francês...",
      image: "image6.jpg",
    },
  ];

  return (
    <Container>
      <h1>{title}</h1>
      <Swiper
        modules={[Navigation, Pagination]} // Registra os módulos necessários
        spaceBetween={16} // Espaço entre os slides
        slidesPerView={3.5} // Quantidade de slides visíveis
        centeredSlides={true}
        navigation // Habilita os botões de navegação
        pagination={{ clickable: true }} // Habilita paginação clicável
        loop={true} // Habilita loop
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide para telas menores que 640px
          768: { slidesPerView: 2 }, // 2 slides para telas menores que 768px
          1024: { slidesPerView: 3.5 }, // 3.5 slides para telas maiores que 1024px
        
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              title={card.title}
              price={card.price}
              description={card.description}
              image={card.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
