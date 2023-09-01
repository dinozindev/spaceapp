import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
        height: 65px;
    }
`

export default function Header() {
    return (
        <>
        <StyledHeader>
            <img src="../../../public/imagens/logo.png" alt="logo spaceapp" />
            <CampoTexto />
        </StyledHeader>
        </>
    )
}