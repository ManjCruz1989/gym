import styled from "styled-components";
import { sliderItems } from "../data.js";

const Container = styled.div`
height: 25vh;
display: flex;
overflow-y: hidden;
overflow-x: scroll;
/*padding: 20px;*/
width: 100vw;

@media (max-width: 970px) {
width: 100vw;
  }

&::-webkit-scrollbar{
    display: none;
}
`;


const Image = styled.img`
flex: 1;
min-width: 20vw;
max-height: 100%;
margin-right: 10px;
object-fit: contain;
cursor: pointer;
transition: transform 450ms;

&:hover{
    transform: scale(1.08);
}
`;

const Slides = () => {
   return (
    <Container>
 
    {sliderItems.map((item)=>(
    <Image key={item.id} src={item.img}/>
    ))}
   
   </Container>
   )
}


export default Slides