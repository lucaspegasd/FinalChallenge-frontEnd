import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Logo } from "../Logo";
import { InputSearch } from "../InputSearch";
import { Button } from "../Button";
import { useAuth } from "../../hooks/Auths"

export function Header() {

  const { signOut } = useAuth();

  function handleSignOut(){
    signOut()
  }
    return(
      <Container>
        <Logo />
        <InputSearch placeholder="Busque por pratos ou ingredientes"  type="search" icon={FiSearch}/>
        <Button title="Pedidos (0)" icon={PiReceipt} />
        <button id="button" >
          <PiSignOut size={32} onClick={handleSignOut} />
        </button>

      </Container>
    )
}