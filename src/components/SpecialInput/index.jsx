import { Container } from './styles';

export function SpecialInput({ ...rest }){

    return(
        <Container>
          <input {...rest} />
        </Container>
    )
}