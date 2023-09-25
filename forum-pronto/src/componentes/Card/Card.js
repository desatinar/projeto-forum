import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonCard, CardStyle, ContainerCard, ContainerPost, ContainerTag, ConteudoCard, EditPost, ImgCard, MensagemCard, NomeCard, TituloCard } from './style';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';

function Card() {

  const navigate = useNavigate()

  const novoArray = useRequestData('http://localhost:3003/post')



  const formatarDataBrasileira = (dataString) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
}

  const novoPost = novoArray && novoArray.map(dado => (
    
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

export default Card