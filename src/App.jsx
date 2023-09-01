import { styled } from "styled-components"
import EstilosGlobais from "./components/GlobalStyles"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Container = styled.section`
  display:flex;
  align-items: center;
  width: 100vw;
`
function App() {


  return ( 
      <FundoGradiente>
        <EstilosGlobais />
        <Header />
        <Container>
          <BarraLateral />
          <Banner backgroundImg="src/components/Banner/banner.png">
            A galeria mais completa de fotos do espaço!
          </Banner>
        </Container>
      </FundoGradiente>
      
  )
}

export default App
