import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import React, { useState } from "react";

import { Container, Slide } from "./styles";

import { Card } from "../Card";

export function Carousel({ title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, title: "Prugna Pie", price: "79,97", description: "Torta de ameixa...", image: "https://github.com/lucaspegasd.png" },
    { id: 2, title: "Peachy Pastrie", price: "32,97", description: "Delicioso folhado de amendoas do para com castanhas argen", image: "image2.jpg" },
    { id: 3, title: "Macarons", price: "79,97", description: "Farinha de amêndoas...", image: "image3.jpg" },
    { id: 4, title: "Bolo de Chocolate", price: "59,97", description: "Clássico bolo...", image: "image4.jpg" },
    { id: 5, title: "Tarte de Limão", price: "49,97", description: "Sobremesa refrescante...", image: "image5.jpg" },
    { id: 6, title: "Croissant", price: "25,00", description: "Clássico francês...", image: "image6.jpg" },
  ];

  const itemsPerClick = .26;
  const maxIndex = Math.ceil(cards.length / itemsPerClick) - 1;



  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container>

        <h1>{title}</h1>
      <Slide>
      <div className="arrow left" style={{ display: currentIndex === 0 ? "none" : "block" }}>
        <button onClick={handlePrev} >
          <PiCaretLeft />
        </button>
      </div>


      <div className="carousel">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${currentIndex * (100 / (cards.length / itemsPerClick))}%)`, // Ajuste de deslocamento
            width: `${cards.length * 100}%`,
            display: "flex",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>

      <div className="arrow right">
        <button onClick={handleNext} disabled={currentIndex === maxIndex}>
          <PiCaretRight />
        </button>
      </div>
      </Slide>
    </Container>
  );
}
