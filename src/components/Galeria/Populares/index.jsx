import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotosPopulares from "./fotos-populares.json";

const PopularContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

const ImagemPopular = styled.img`
  border-radius: 20px;
  margin-bottom: 24px; 
`

const Button = styled.button`
  width: 100%;
  border: 2px solid #C98CF1;
  background-color: transparent;
  height: 72px;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  font-size: 20px;
`

export default function Populares() {
  return (
    <PopularContainer style={{minWidth: 206}}>
      <Titulo $alinhamento="center">Populares</Titulo>
      {fotosPopulares.map(foto => {
        return <ImagemPopular src={foto.path} key={foto.id} /> 
      })}
      <Button>Ver mais</Button>
    </PopularContainer>
    
  )
}
