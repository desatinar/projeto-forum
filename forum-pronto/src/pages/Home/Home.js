
import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ContainerHome, SectionStyle } from "./style";



function Home({news, setNews, postFeed, setPostFeed}) {

    return (
        <>
            <HeaderPerfil
                news={news}
                titulo={'Questions'}
            />
            
            <SectionStyle>
                <Menu />

                <ContainerHome>
                {/* <Filtros/> */}

                <Card            
                />

                </ContainerHome>

            </SectionStyle>
        </>
    )
}


export default Home