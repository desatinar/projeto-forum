import axios from "axios";
import { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerDiv, FormStyle, InputStyle,TextareaStyle } from "./styles";

const CriarPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const criarPostAPI =()=>{

        const token = localStorage.getItem('token')

        if (!token){
            console.error("Token not found")
            return;
        }

        const data = {
            title,
            content,
        };
    
        if (image) {
            data.image = image;
        }

    axios.post('https://forum-backend-3zv0.onrender.com/post/create',data,{
        headers:{'Authorization': token}})
        .then(response =>{
            // pegarPostApi()
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }

    return(
        <>
        <HeaderPerfil titulo={'New Question'} />

        <Menu/>
        <FormStyle onSubmit={criarPostAPI}>

        
            <InputStyle
                placeholder='Título'
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />


            <TextareaStyle
                placeholder='Conteúdo'
                value={content}
                onChange={e => setContent(e.target.value)}
                required
            />

                <input type="file" 
                onChange={e => setImage(e.target.files[0])}
                />
          
            <ContainerDiv>
                {/* <ButtonStyle onClick={image}>Adicionar Imagem</ButtonStyle> */}

                <ButtonStyle type="submit">Enviar</ButtonStyle>

            </ContainerDiv>
        </FormStyle>
      
    </>
    )
}

export default CriarPost