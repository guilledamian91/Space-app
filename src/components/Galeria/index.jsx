import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display:flex;
    gap:24px;
`
const SeccionFluida = styled.section`
    flex-grow:1;
`
const ImagenContainer = styled.section`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    gap:24px;
`


const Galeria = ({fotos=[],setTag, alSeleccionarFoto, alAlternarFavorito}) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenContainer>
                    {fotos.map(foto => <Imagen
                        alAlternarFavorito={alAlternarFavorito}
                        alSolicitarZoom={alSeleccionarFoto} 
                        key={foto.id}
                        foto={foto} />
                    )}
                    </ImagenContainer>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
};

export default Galeria;