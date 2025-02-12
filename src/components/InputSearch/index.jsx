import { Container } from "./styles";


export function InputSearch({ icon: Icon, ...rest }) {
    return(
        <Container>
        {Icon && <Icon size={22} />}
        <input {...rest}/>
      </Container>
    )
}