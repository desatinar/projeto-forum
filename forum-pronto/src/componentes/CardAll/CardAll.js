import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonCard, CardStyle, ContainerCard, ContainerPost, ContainerTag, ConteudoCard, EditPost, ImgCard, MensagemCard, NomeCard, TituloCard } from './style';
import { useNavigate } from 'react-router-dom';

function CardAll({ postFeed, setPostFeed }) {

  const navigate = useNavigate()


  useEffect(() => {

    const token = localStorage.getItem('token'); // Recupere o token do local storage

    if (!token) {
      console.error("Token not found");
      return;
    }

    axios.get('http://localhost:3003/post', {
      headers: { 'Authorization': token }
    })
      .then(response => {
        console.log(response.data)
        setPostFeed(response.data)
      })
      .catch(error => console.error(error));
  }, []);

  const formatarDataBrasileira = (dataString) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
}



  // const novoPost = postFeed && postFeed.map(dado => (
  const novoPost = postFeed && postFeed.map(dado => (
    
    <CardStyle key={dado.id}>
      <ImgCard 
      src='https://github.com/PaulaRabelo.png' 
      alt='foto de perfil' 
      />

      <NomeCard>
        Paula Rabelo de Oliveira
      </NomeCard>

      <MensagemCard>
        {formatarDataBrasileira(dado.created_at)}
      </MensagemCard>
      
      <TituloCard>{dado.title}</TituloCard>
      <ConteudoCard>{dado.content}</ConteudoCard>
      <img src={dado.post_image} />
      <EditPost>
        <button>
          Comentar
        </button>
        <button>
          Curti
        </button>
      </EditPost>

    </CardStyle>)

  )
  return (
    <>

      <ContainerCard>

        {novoPost}
        

      </ContainerCard>

    </>
  )
}

export default CardAll