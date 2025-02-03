import { Container } from "./styles";
import logo from "../../assets/polygon1.svg";


export function AdminLogo() {

    return(
      <Container>
        <div>
          <img src={logo} alt="" />

          <h1>food explorer</h1>
        </div>

        <p>admin</p>
      </Container>
    )
}