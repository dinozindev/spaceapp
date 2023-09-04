import { styled } from "styled-components"
import tags from "./tags.json"

const TagsSection = styled.section`
    display:flex;
    align-items: center;
    width: 100%;
    padding: 50px 0 39px 0;
`

const TagsP = styled.p`
    font-size: 24px;
    color: #d9d9d9;
    font-weight: 400;
    margin-right: 48px;
`

const TagsContainer = styled.div`
    display:flex;
    gap: 24px;
`

const StyledButton = styled.button`
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    padding: 12px;
    border-radius: 10px;
    background-color:rgba(217, 217, 217, 0.30);
    color: #d9d9d9;
    &:hover {
        border-color: #c98cf1;
    }
`

export default function Tags() {
    return (
        <TagsSection>
            <TagsP>Busque por tags:</TagsP>
            <TagsContainer>
                {tags.map((tag) => {
                    return <StyledButton key={tag.id}>{tag.titulo}</StyledButton>
                })}
            </TagsContainer>
        </TagsSection>
    )
}
