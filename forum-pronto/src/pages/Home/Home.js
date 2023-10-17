import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Historicos from "../../componentes/Historicos/Historicos";
import Menu from "../../componentes/Menu/Menu";
import { ContainerHome, SectionStyle } from "./style";

function Home({ news, setNews }) {

    return (
        <>
            <HeaderPerfil
                news={news}
                titulo={'Questions'}
            />

            <SectionStyle>
                <Menu />

                <ContainerHome>

                    <Card />

                </ContainerHome>

            </SectionStyle>

            <Historicos/>
        </>
    )
}


export default Home