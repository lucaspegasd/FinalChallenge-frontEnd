import { Container, Main } from "./styles";
import { Heading } from "../../components/Heading";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { Swipe } from "../../components/Swipe";


export function Home() {
    return(
        <Container>
            <Header />

            <Main >
              <Heading />
              <Swipe title="Refeições" />
              <Swipe title="Sobremesas"/>
              <Swipe title="Bebidas"/>
              
            </Main>

            <Footer />
            
        </Container>
    )
}