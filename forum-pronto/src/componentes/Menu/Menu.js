import { useNavigate } from "react-router-dom"
import { MenuStyle } from "./style"


function Menu(){

    const navigate = useNavigate()

    return(
        <MenuStyle>
        <input placeholder="Search" />

        <h3>Menu</h3>
        <button>Questions</button>
        <button>Tags</button>
        <button>Ranking</button>

        <p>Personal Navigator</p>
        <button onClick={()=>navigate('/home')}>Feed</button>
        <button >Your questions - apenas as perguntas feitas pelo usuário</button>
        <button onClick={()=>navigate('/criarPost')}>Your answers - os posts que o usuário comentou</button>
        <button>Your likes & votes - os posts que o usuário curtiu</button>


        </MenuStyle>
    )
}

export default Menu