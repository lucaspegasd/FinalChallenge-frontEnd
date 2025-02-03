import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Plate() {

    const card = { id: 1, title: "Prugna Pie", price: "79,97", description: "Torta de ameixa...", image: "https://github.com/lucaspegasd.png" }

    return(
        <Container>
            <Header />

            <div id="space">
                   <Link to="/">
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
                        <div id="numbers"><FiPlus/> 01 <FiMinus/></div>
                            <Button title={`Incluir - R$ ${card.price}`} />
                    </div>
                </div>
              </Content>
            </div>
            
            <Footer />            
        </Container>
    )
}