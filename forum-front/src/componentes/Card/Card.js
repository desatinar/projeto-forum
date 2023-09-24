import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonCard, CardStyle, ContainerCard, ContainerPost, ContainerTag, ConteudoCard, EditPost, ImgCard, MensagemCard, NomeCard, TituloCard } from './style';
import { useNavigate } from 'react-router-dom';

function Card({postFeed, setPostFeed}) {
 
  const navigate = useNavigate()
  // const [news, setNews] = useState([])

 


  useEffect(() => {

    const token = localStorage.getItem('token'); // Recupere o token do local storage

    if (!token) {
      console.error("Token not found");
      return;
    }

    axios.get('http://localhost:3003/post',{
      headers: {'Authorization': token }})
      .then(response => {
        console.log(response.data)
        setPostFeed(response.data)
      })
      .catch(error => console.error(error));
  }, []);

  const novoPost = postFeed && postFeed.map(item => (
    <CardStyle key={item.id}>

      {/* <ImgCard src={item.url_img} alt='' /> */}
      {/* <NomeCard>{item.creator_name}</NomeCard> */}
      <NomeCard>Nome</NomeCard>
      <MensagemCard>{item.created_at}</MensagemCard>
    
      {/* <ButtonCard onClick={()=>navigate('/editar')}>Editar</ButtonCard> */}

      <TituloCard>{item.title}</TituloCard>
       <ConteudoCard>{item.content}</ConteudoCard>
       <img src={item.post_image}/>

  

      <EditPost>
       <button>
         Comentar
       </button>
       <button>
        Curti
       </button>
      </EditPost>

    </CardStyle>
  
      ))
  return (
    <>

      <ContainerCard>

        {novoPost}
       

      </ContainerCard>

    </>
  )
}

export default Card