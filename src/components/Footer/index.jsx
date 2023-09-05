import { styled } from "styled-components"

const FooterStyled = styled.footer`
    background-color: #04244f; 
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
   h4 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
   }
`

const SocialDiv = styled.div`
    display:flex;
    align-items: center;
    gap: 48px;
    a {
        img {
            width: 30px;
        }
    }
`




export default function Footer() {
    return (
        <FooterStyled>
            <SocialDiv>
                <a href="facebook.com"><img src="imagens/sociais/facebook.svg" alt="" /></a>
                <a href="twitter.com"><img src="imagens/sociais/instagram.svg" alt="" /></a>
                <a href="instagram.com"><img src="imagens/sociais/twitter.svg" alt="" /></a>
            </SocialDiv>
            <h4>Desenvolvido por Alura.</h4>
        </FooterStyled>
    )

}
