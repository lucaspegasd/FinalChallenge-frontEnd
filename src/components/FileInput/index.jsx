import { Container } from './styles';
import { PiUploadSimple } from "react-icons/pi";

export function FileInput({ ...rest }){

    return(
        <Container>
            
            <input {...rest} type="file" id="file" />
            <label htmlFor="file"><PiUploadSimple /> Escolher Arquivo</label>
        </Container>
    )
}