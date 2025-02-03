import { Container } from "./styles";
import logo from "../../assets/polygon1grey.svg";

export function Footer() {
    return(
        <Container>
            <div>
                <img src={logo} alt="" />

                <h1>food explorer</h1>
            </div>

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}