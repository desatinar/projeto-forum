import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Create from "../pages/Create/Create"
import Home from "../pages/Home/Home"
import CriarPost from "../pages/CriarPost/CriarPost"
import EditarPerfil from "../pages/EditarPerfil/EditarPerfil"




function Rotas(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="home" element={<Home 
                news={props.news} 
                setNews={props.setNews}
                postFeed={props.postFeed}
                setPostFeed={props.setPostFeed}
                />} />
                <Route path="cadastrar" element={<Create/>}/>
                <Route path="criarPost" element={<CriarPost/>} />
                <Route path="editarPefil" element={<EditarPerfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas