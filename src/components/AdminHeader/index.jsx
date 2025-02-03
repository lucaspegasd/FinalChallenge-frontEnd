import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { AdminLogo } from "../AdminLogo";
import { InputSearch } from "../InputSearch";
import { Button } from "../Button";


export function AdminHeader() {

    return(
      <Container>
        <AdminLogo />
        <InputSearch placeholder="Busque por pratos ou ingredientes"  type="search" icon={FiSearch}/>
        <Button title="Novo prato" />
        <button id="button" >
          <PiSignOut size={32} />
        </button>

      </Container>
    )
}