import { Container, Main, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { NoteItem } from "../../components/NoteItem";
import { AdminHeader } from "../../components/AdminHeader";
import { Input } from "../../components/Input";
import { ButtonSave } from "../../components/ButtonSave";
import { TextArea } from "../../components/TextArea";
import { FileInput } from "../../components/FileInput";
import { SpecialInput } from "../../components/SpecialInput";
import { SpecialSection } from "../../components/SpecialSection";
import { Section } from "../../components/Section";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCaretLeft, PiCaretDown} from "react-icons/pi";


export function AddPlate() {

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTags(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }
    return(
        <Container>
            <AdminHeader />
            <Main>
               <div id="space">
                   <Link to="/admin">
                       <PiCaretLeft /> <p>voltar</p>
                   </Link>
               </div>

                <h1>Adicionar prato</h1>

                <Content>

                <div className="row">
                    <Section title="Imagem do prato">
                      <FileInput />
                    </Section>

                    <SpecialSection title="Nome">
                      <SpecialInput type="text" placeholder="Ex: Salada Ceasar"/> 
                    </SpecialSection>

                    <SpecialSection title="Categoria">
                        <PiCaretDown />
                       <select id="Choice" name="opcoes">
                            <option value={null}></option>
                            <option value="opcao1">Refeição</option>
                            <option value="opcao2">Sobremesa</option>
                            <option value="opcao3">Bebida</option>
                       </select>
                    </SpecialSection>
                    
                </div>

                <div className="row">
                    <SpecialSection title="Ingredientes">
                     <div className="tags">
                    {
                        tags.map((tag, index) => (
                            <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => {handleRemoveTags(tag)}}
                            />
                        ))   
                    }

                    <NoteItem 
                    value={newTag} 
                    isNew 
                    placeholder="Nova tag" 
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTags}
                    />
                     </div>
                  </SpecialSection>

                  <Section title="Preço">
                      <Input id="number" type="Number" placeholder="R$ 00,00" /> 
                    </Section>
                </div>

                <div>
                    <Section title="Descrição">
                      <TextArea />
                    </Section>
                </div>

                <div id="buttons">
                    <ButtonSave placeholder="" />
                </div>

                </Content>
            


            </Main>
            <Footer />           
        </Container>
    )
}