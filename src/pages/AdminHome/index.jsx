import { Container, Main } from "./styles";
import { Heading } from "../../components/Heading";
import { Footer } from "../../components/Footer";
import { AdminHeader } from "../../components/AdminHeader";
import { AdminCarousel } from "../../components/AdminCarousel";


export function AdminHome() {
    return(
        <Container>
            <AdminHeader />

            <Main >
              <Heading />
              <AdminCarousel title="Refeições" />
              <AdminCarousel title="Sobremesas" />
              <AdminCarousel title="Bebidas" />
              
            </Main>

            <Footer />
            
        </Container>
    )
}