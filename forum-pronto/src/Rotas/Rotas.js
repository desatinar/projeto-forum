import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Create from "../pages/Create/Create"
import Home from "../pages/Home/Home"
import CriarPost from "../pages/CriarPost/CriarPost"
import EditarPerfil from "../pages/EditarPerfil/EditarPerfil"
import Comentar from "../componentes/Comentar/Comentar"
import TelaInicial from "../pages/TelaInicial/TelaInicial"


function Rotas({setNovo, novo}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TelaInicial setNovo={setNovo} novo={novo}  />} />
                <Route path="home" element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="cadastrar" element={<Create/>}/>
                <Route path="criarPost" element={<CriarPost/>} />
                <Route path="editarPefil" element={<EditarPerfil/>}/>
                <Route path="comentar" element={<Comentar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas