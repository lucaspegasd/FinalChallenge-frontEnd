import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../assets/polygon1.svg";

import { useAuth } from "../../hooks/Auths";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password })
    }
    return(
        <Container>

            <div id="logo" >
             <img src={logo} alt="" />

             <h1>food explorer</h1>
            </div>

            <form action="">
                <h1>Faça login</h1>

                <div className="input">
                    <p>Email</p>
                    <input 
                    type="email" 
                    placeholder="Exemplo: exemplo@exemplo.com"
                    onChange={e => setEmail(e.target.value)}
                    >

                    </input>
                </div>

                <div className="input">
                    <p>Senha</p>
                    <input 
                    type="password" 
                    placeholder="No mínimo 6 caracteres" 
                    onChange={e => setPassword(e.target.value)}
                    >

                    </input>
                </div>


               <Button title="Entrar" onClick={handleSignIn} />

               <Link id="link" to="/">Criar uma conta</Link>
            </form>
        </Container>
    )
}