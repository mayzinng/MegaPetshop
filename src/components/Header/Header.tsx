import { Container } from "./styles";
import logoImg from "../../assets/logo.svg"
import loginImg from "../../assets/login.svg"



export function Header() {
    return(
        <Container>
            <img src={logoImg} alt="logo"/>

            <input type="text" placeholder="o que seu pet precisa?"></input>

            <div>
                <a href="#">LOGIN</a>
                <img src={loginImg} alt="login"/>
            </div>
        </Container>
    );
}