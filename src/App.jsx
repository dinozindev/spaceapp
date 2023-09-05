import { styled } from "styled-components"
import EstilosGlobais from "./components/GlobalStyles"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerBackground from "./assets/banner.png"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1460px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display:flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoModal, setFotoModal] = useState(null);
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImg={bannerBackground}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            {/* Atualiza o estado de fotoModal ao clicar no botão de expandir imagem */}
            <Galeria aoFotoSelecionada={foto => setFotoModal(foto)} fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoModal} aoFechar={() => setFotoModal(null)} />
    </FundoGradiente>

  )
}

export default App
