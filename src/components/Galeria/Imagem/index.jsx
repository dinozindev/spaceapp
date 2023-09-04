import React from 'react'
import { styled } from 'styled-components'
import BotaoIcone from '../../BotaoIcone'

const ImagemContainer = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display:flex;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`

const Img = styled.img`
    max-width: 100%;
    border-radius: 20px 20px 0 0;
`

const CaptionSection = styled.figcaption`
    background-color: #001634;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 20px 20px;
`

const CaptionTitle = styled.h3`
    margin: 0 0 6px 0; 
    font-size: 24px;
    font-weight: 700;
`

const CaptionFooter = styled.footer`
    display:flex;
    justify-content: space-between;

`

const CaptionSource = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    
`

const ButtonContainer = styled.div`
    display:flex;
`


export default function Imagem({ foto }) {
    return (
        <ImagemContainer>
            <Img src={foto.path} alt={foto.titulo} />
            <CaptionSection>
                <CaptionTitle>{foto.titulo}</CaptionTitle>
                <CaptionFooter>
                    <CaptionSource>Fonte/fotógrafo/satélite</CaptionSource>
                    <ButtonContainer>
                        <BotaoIcone>
                            <img src="./public/icones/favorito.png" alt="icone favorito" />
                        </BotaoIcone>
                        <BotaoIcone>
                            <img src="./public/icones/expandir.png" alt="icone expandir" />
                        </BotaoIcone>
                    </ButtonContainer>
                </CaptionFooter>
            </CaptionSection>
        </ImagemContainer>
    )

}