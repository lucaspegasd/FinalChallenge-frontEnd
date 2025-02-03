import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";

import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";



export function AdminCard({ image, price, description, title, ...rest }) {
    return(
        <Container {...rest}>
            <PiPencilSimple />
            <div id="content">
              <img src={image} alt="" />

              <a href="">{title} {'>'}</a>

              <span>{description}</span>

              <h1>R$ {price}</h1>

            </div>
        </Container>
    )
}