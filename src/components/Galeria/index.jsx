import { styled } from "styled-components"
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.section`
    display:flex;
    gap: 24px;

`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaImagens = styled.ul`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 0;
`
// recebe o método aoFotoSelecionada e passa como valor da prop aoZoomSolicitado do componente Imagem. 
export default function Galeria({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoAlternarTag }) {
    return (
        <>
            <Tags aoAlternarTag={aoAlternarTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaImagens>
                        {fotos.map(foto => <Imagem
                        aoZoomSolicitado={aoFotoSelecionada}
                        aoAlternarFavorito={aoAlternarFavorito}
                        key={foto.id} 
                        foto={foto}
                        />)}
                    </ListaImagens>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}