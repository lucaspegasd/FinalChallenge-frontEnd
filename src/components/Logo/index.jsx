import { Container } from "./styles";
import logo from "../../assets/polygon1.svg";


export function Logo() {

    return(
      <Container>
         <img src={logo} alt="" />

         <h1>food explorer</h1>
      </Container>
    )
}