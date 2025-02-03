import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";

import { Container } from "./styles";
import { Button } from "../Button";



export function Card({ image, price, description, title, ...rest }) {
    return(
        <Container {...rest}>
            <FiHeart />
            <div id="content">
              <img src={image} alt="" />

              <a href="">{title} {'>'}</a>

              <span>{description}</span>

              <h1>R$ {price}</h1>

              <div id="bottom">
                  <div id="numbers"><FiPlus/> 01 <FiMinus/></div>
                  <Button title="Incluir" />
              </div>
            </div>
        </Container>
    )
}