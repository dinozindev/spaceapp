import { styled } from "styled-components"

const StyledItem = styled.li`
  font-size: 24px;
  font-family: ${props => props.$ativo ? "GhandiSansBold" : "GhandiSansRegular"}, sans-serif;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${ props => props.$ativo ? '#7b78e5' : '#d9d9d9' };
  display:flex;
  align-items: center;
  gap: 22px;
`

export default function ItemNavegacao({children, iconeAtivo, iconeInativo, ativo = false})  {
  return (
    <StyledItem $ativo={ativo}>
    <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
    {children}
    </StyledItem> 
  )
}
