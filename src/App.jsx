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
import Footer from "./components/Footer"

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

  // quando o botão de favoritar é pressionado, a function toggleFavorite é acionada, recebendo a foto que foi favoritada como parâmetro. Será feito uma atualização do estado do array fotosDaGaleria, em que todos os itens serão copiados, porém uma nova propriedade será adicionada, a favorita. Caso a fotoDaGaleria no array tenha o mesmo id da foto que teve o botão pressionado, favorita retorna como o contrário do valor booleano atual, o seja, se favorita for true, ficará false e vice-versa. 
  // caso o id da foto seja igual ao id da foto do modal, o estado do modal será atualizado, copiando suas propriedades anteriores + a propriedade de favorita, que alterará de true para false ou vice-versa. 
  const toggleFavorite = (foto) => {
    if(foto.id === fotoModal?.id) {
      setFotoModal({
        ...fotoModal, 
        favorita: !fotoModal.favorita
      })
    }  
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  // quando uma tag é pressionada, filtra apenas as imagens que são pertencentes àquela categoria. 
  const toggleTag = (tag) => {
    if(tag.id === 0) {
      setFotosDaGaleria(fotos)
    } else {
      setFotosDaGaleria(fotos.filter(foto => foto.tagId === tag.id))
    }
    
  }

  const searchFilter = (e) => {
    if(e.target.value === "") {
      setFotosDaGaleria(fotos)
    } else {
      setFotosDaGaleria(fotosDaGaleria.filter(foto => foto.titulo.toLowerCase().includes(e.target.value)))
    }
    
  }
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header filtro={searchFilter}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImg={bannerBackground}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            {/* Atualiza o estado de fotoModal ao clicar no botão de expandir imagem */}
            <Galeria aoFotoSelecionada={foto => setFotoModal(foto)} fotos={fotosDaGaleria} aoAlternarFavorito={toggleFavorite} aoAlternarTag={toggleTag} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom foto={fotoModal} aoFechar={() => setFotoModal(null)} aoAlternarFavorito={toggleFavorite} />
    </FundoGradiente>

  )
}

export default App
