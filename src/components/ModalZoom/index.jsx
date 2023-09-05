import { styled } from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Dialog = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    background: transparent;
    border: none;
    display:flex;
    justify-content: center;
`

const BotaoFechar = styled.button`
    border:none;
    background: transparent;
    position: absolute;
    top: 6%;
    left: 89%;
    cursor: pointer;
`

// quando o estado da foto existir, o modal estará aberto. Caso a foto não exista, ou seja, seja null, o modal não aparecerá.

export default function ModalZoom({ foto, aoFechar, aoAlternarFavorito }) {
    return (
        <>
        {foto && <>
        <Overlay />
        <Dialog open={foto ? true : false} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}  />
            <form method="dialog">
                <BotaoFechar formMethod="dialog">
                    <img src="/icones/fechar.png" />
                </BotaoFechar>
            </form>
        </Dialog>
        </>}
        </>
    )
}
