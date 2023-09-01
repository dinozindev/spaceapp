import { styled } from "styled-components"

const StyledBanner = styled.figure`
    width: 100%;
    background-image: ${props => `url(${props.$background})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-grow: 1;
    height: 328px;
    border-radius: 20px; 
`

const Title = styled.h2`
    color: #fff;
    font-size: 40px;
    padding: 64px;
    font-weight: 400;
    max-width: 300px;
`

export default function Banner({children, backgroundImg}) {
  return (
    <StyledBanner $background={backgroundImg}>
        <Title>{children}</Title>
    </StyledBanner>
  )
}
