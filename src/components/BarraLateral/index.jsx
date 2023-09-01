import { styled } from "styled-components"
import ItemNavegacao from "./itemNavegacao"


const StyledAside = styled.aside`

`

const StyledNav = styled.nav`

`

const StyledUl = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    width: 212px;
`


export default function BarraLateral() {
    return (
        <StyledAside>
            <StyledNav>
                <StyledUl>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo={false}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo={false}
                    >
                        Mais curtidas
                    </ItemNavegacao><ItemNavegacao
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                        ativo={false}
                    >
                        Novas
                    </ItemNavegacao><ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        ativo={false}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </StyledUl>
            </StyledNav>
        </StyledAside>
    )
}