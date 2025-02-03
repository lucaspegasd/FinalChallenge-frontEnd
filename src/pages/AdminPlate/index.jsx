import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { AdminHeader } from "../../components/AdminHeader";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { Link } from 'react-router-dom';

export function AdminPlate() {

    const card = { id: 1, title: "Prugna Pie", price: "79,97", description: "Torta de ameixa...g nvg nm gfmn mdn mn mdn mn  dmnjndjn djn ddkjngm jkm f", image: "https://github.com/lucaspegasd.png" }

    return(
        <Container>
            <AdminHeader />

            <div id="space">
                   <Link to="/admin">
                       <PiCaretLeft /> <p>voltar</p>
                   </Link>
              <Content>
                    <img src={card.image} alt="" />

                <div>
                   <div id="info" >
                      <h1>{card.title}</h1>

                      <span id="description">{card.description}</span>

                      <div id="tags">
                        <Tag title="pão"/>
                        <Tag title="chocolate"/>
                        <Tag title="cebola"/>
                        <Tag title="açucar"/>
                        <Tag title="cereja"/>
                        <Tag title="pugna"/>
                      </div>

                    </div>

                    <div id="bottom">
                        <Button title="Editar Prato" />
                    </div>
                </div>
              </Content>
            </div>
            
            <Footer />            
        </Container>
    )
}