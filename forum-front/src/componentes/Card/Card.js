import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonCard, CardStyle, ContainerCard, ContainerPost, ContainerTag, ConteudoCard, EditPost, ImgCard, MensagemCard, NomeCard, TituloCard } from './style';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../../../forum-pronto/src/hooks/useRequestData';

function Card() {

  const novoArray = useRequestData('http://localhost:3003/post')

  const formatarDataBrasileira = (dataString) => {
    if (typeof dataString !== 'string') {
        console.error('formatarDataBrasileira received a non-string value:', dataString);
        return "";
    }
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
}




  const novoPost = novoArray && novoArray.map(dado => (

    <CardStyle key={dado.creator_id}>
      <ImgCard
        src={dado.post_image}
        alt='foto de perfil'
      />

      <NomeCard>
        {dado.creator_name}
      </NomeCard>

      <MensagemCard>
      {/* {formatarDataBrasileira(dado.post_created_at)} */}

        {/* {dado.post_created_at}  */}
      
      </MensagemCard>

      <TituloCard>{dado.post_title}</TituloCard>
      <ConteudoCard>{dado.post_content}</ConteudoCard>
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