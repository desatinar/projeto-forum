
import React, { useEffect, useState } from 'react';
import { useRequestData } from '../../hooks/useRequestData'; // Certifique-se de importar corretamente o hook
import { useForm } from '../../hooks/useForm'; // Certifique-se de importar corretamente o hook
import axios from 'axios';
import GetComentario from '../getComentario/getComentario';

function Comentario({ postId }) {

  const [mensagem, setMensagem] = useState([])
  const [comentar, setComentario] = useState(false)
  const [comentarios, setComentarios] = useState([]);

  console.log(mensagem)

  const token = localStorage.getItem('token');

  console.log(postId)
  const handleCommentSubmit = () => {
    const commentData = {
      postId,
      comment: mensagem
    };


    // Realize a solicitação POST para adicionar o comentário
    axios.post('https://forum-backend-3zv0.onrender.com/comment/create', commentData, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {

        // setComentarios(response.data);
        console.log('comentario',response.data)

      })
      .catch((err) => console.error(err.response.data.message));
  };



  return (
    <div>
      {!comentar ? (
        <>
          <input
            value={mensagem}
            onChange={(e) => { setMensagem(e.target.value) }}
            name="comment"
            placeholder="Digite seu comentário"
          />

          <button onClick={() => handleCommentSubmit(mensagem)}>Postar</button>
        </>

      ) : (
        <></>
      )}
      <button 
      onClick={() => setComentario(!comentar)}>
        Comentar
      </button>
      
          {mensagem}

     
<GetComentario postId={postId}/>
      <div>

      </div>

    </div>
  );
}

export default Comentario;

