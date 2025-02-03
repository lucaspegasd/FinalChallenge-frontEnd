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
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiCaretLeft, PiCaretDown } from "react-icons/pi";

import { useApp } from '../../hooks/app';

export function EditPlate() {
    const { card, updateCard } = useApp();

    // Inicializando os estados com valores padrão
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [price, setPrice] = useState(card.price);
    const [Categoria, setCategoria] = useState(card.Categoria);

    async function handleUpdate() {
        const updated = {
            title,  
            description,
            price,
            Categoria,
        };
        const cardUpdated = Object.assign(card, updated );
        await updateCard({ card: cardUpdated });

    }

    // Lógica para tags
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTags() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    return (
        <Container>
            <AdminHeader />
            <Main>
                <div id="space">
                    <Link to="/admin">
                        <PiCaretLeft /> <p>voltar</p>
                    </Link>
                </div>

                <h1>Editar prato</h1>

                <Content>

                    <div className="row">
                        <Section title="Imagem do prato">
                            <FileInput />
                        </Section>

                        <SpecialSection title="Nome">
                            <SpecialInput
                                type="text"
                                placeholder="Ex: Salada Ceasar"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </SpecialSection>

                        <SpecialSection title="Categoria">
                            <PiCaretDown />
                            <select
                                id="Choice"
                                name="opcoes"
                                value={Categoria}
                                onChange={e => setCategoria(e.target.value)}
                            >
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
                                {tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => { handleRemoveTags(tag) }}
                                    />
                                ))}

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
                            <Input
                                type="Number"
                                placeholder="R$ 00,00"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Section>
                    </div>

                    <div>
                        <Section title="Descrição">
                            <TextArea value={description} onChange={e => setDescription(e.target.value)} />
                        </Section>
                    </div>

                    <div id="buttons">
                        <button id="button">Excluir prato</button>
                        <ButtonSave onClick={handleUpdate} />
                    </div>

                </Content>

            </Main>
            <Footer />
        </Container>
    );
}
