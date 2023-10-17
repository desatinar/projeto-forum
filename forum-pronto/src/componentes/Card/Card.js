import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonCard, CardStyle, ContainerCard, ContainerPost, ContainerTag, ConteudoCard, EditPost, ImgCard, MensagemCard, NomeCard, TituloCard } from './style';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../../../forum-pronto/src/hooks/useRequestData';
import CreateComentario from '../CreateComentario/CreateComentario';
import Comentario from '../Comentario/Comentario';
import Curtir from '../Curtir/Curtir';
import Postagem from '../Postagem/Postagem';

function Card() {

  const [novoArray, loading, errorUsuario] = useRequestData('post')

  console.log('novoarray',novoArray)

  const novoPost = novoArray && novoArray.map(dado => (

    <CardStyle key={dado.creator_id}>

      <ImgCard src={dado.post_image} alt='foto de perfil' />

      <NomeCard>{dado.creator_name} </NomeCard>

      <MensagemCard> {dado.post_created_at} </MensagemCard>

      <TituloCard>{dado.post_title}</TituloCard>
      <ConteudoCard>{dado.post_content}</ConteudoCard>

      <EditPost>
        {/* <Comentario postId={dado.post_id} /> */}
        <Postagem/>
        <Curtir postId={dado.post_id} userId={dado.creator_id} />
      </EditPost>

    </CardStyle>)


  )
  return (
    <>
      {errorUsuario && <p>Error na requisição, aguarde!</p>}
      {!loading ? (
        <ContainerCard> {novoPost} </ContainerCard>)
        : (<p>Loading...</p>)}
    </>
  )
}

export default Card