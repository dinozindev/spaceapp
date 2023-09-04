import { styled } from "styled-components"

const StyledInput = styled.input`
    border: 2px solid #C98CF1; 
    border-radius: 10px;
    color: #d9d9d9;
    font-size: 20px;
    font-family: "Gandhi Sans", sans-serif;
    font-weight: 400;
    padding: 16px 12px;
    width: 602px;
    height: 40px;
    background-color: transparent;
    background-image: url("src/components/CampoTexto/search.svg");
    background-repeat: no-repeat;
    background-position: right center;
    background-origin: content-box;
`


export default function CampoTexto() {
    return (
        <>
        <StyledInput type="text" placeholder="O que você procura?" />
        </>
    )
}