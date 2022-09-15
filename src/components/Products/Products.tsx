import { Container, Content } from "./styles";
import foodOneImg from "../../assets/food1.png"
import foodTwoImg from "../../assets/food2.png"
import foodThreeImg from "../../assets/food3.png"


export function Products() {
    return(
       
        <Container>
             <Content>
             <div>
                <img src={foodOneImg}/>
                <h3>Ração pedigree para cães adultos - sabor: frango, ovo e arroz</h3>
                <h3><strong>R$55,73</strong></h3>

            </div>
            <div>
                <img src={foodTwoImg}/>
                <h3>Ração pedigree para cães filhotes - sabor: carne e leite</h3>
                <h3><strong>R$57,50</strong></h3>

            </div>
            <div>
                <img src={foodThreeImg}/>
                <h3>Ração pedigree para cães pequenos - sabor: frango assado, arroz e vegetais</h3>
                <h3><strong>R$52,00</strong></h3>


            </div>

            <div>
                <img src={foodOneImg}/>
                <h3>Ração pedigree para cães adultos - sabor: frango, ovo e arroz</h3>
                <h3><strong>R$55,73</strong></h3>

            </div>
            <div>
                <img src={foodTwoImg}/>
                <h3>Ração pedigree para cães filhotes - sabor: carne e leite</h3>
                <h3><strong>R$57,50</strong></h3>

            </div>
            <div>
                <img src={foodThreeImg}/>
                <h3>Ração pedigree para cães pequenos - sabor: frango assado, arroz e vegetais</h3>
                <h3><strong>R$52,00</strong></h3>


            </div>
            </Content>
            
        </Container>
    );
}