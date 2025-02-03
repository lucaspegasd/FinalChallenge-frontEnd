import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/polygon1.svg";
import { useState } from "react";


import { api } from "../../services/api"

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    async function handleSignUp() {
        if(!name || !email || !password){
            return alert("Preencha todos os campos");

        }

        await api.post("/users", { name, email, password })
        .then(() => {
            alert("usuario cadastrado com sucesso");
            navigate("/signin");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)

            } else {
                alert("nao foi possivel cadastrar")
            }
        })
    }
    return(
        <Container>

            <div id="logo" >
             <img src={logo} alt="" />

             <h1>food explorer</h1>
            </div>

            <form action="">
                <h1>Crie sua conta</h1>

                <div className="input">
                    <p>Seu nome</p>
                    <input type="text" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}></input>
                </div>

                <div className="input">
                    <p>Email</p>
                    <input type="email" placeholder="Exemplo: exemplo@exemplo.com" onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div className="input">
                    <p>Senha</p>
                    <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}></input>
                </div>


               <Button title="Criar conta" onClick={handleSignUp} />

               <Link id="link" to="/signin" >Já tenho uma conta</Link>
            </form>
        </Container>
    )
}