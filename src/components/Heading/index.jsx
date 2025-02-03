import { Container } from "./styles";
import img from "../../assets/macarrone.png";



export function Heading() {

    return(
      <Container>
        <img src={img} alt="" />


          <div id="text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>

      </Container>
    )
}