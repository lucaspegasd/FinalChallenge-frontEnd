import { Container } from './styles';

export function TextArea({ ...rest }){

    return(
        <Container>
          <textarea {...rest}  type='textarea' />
        </Container>
    )
}