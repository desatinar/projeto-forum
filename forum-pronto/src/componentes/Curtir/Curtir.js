import axios from "axios";
import { useState } from "react";

const Curtir = ({ postId, userId }) => {
    const [like, setLike] = useState(1); // Defina o valor do like diretamente como 1
    const token = localStorage.getItem('token');
  
    const handleLikeSubmit = () => {
      const likeData = {
        post: postId,
        user: userId,
        like: like, // Use o valor do estado `like` aqui
      };
      console.log(likeData)
  
      // Realize a solicitação POST para adicionar o like
      axios.post(`http://localhost:3003/likes/${postId}`, likeData, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          console.log('Postagem curtida', response.data);
        })
        .catch((err) => console.error(err.response.data.message));
    };
  
    return (
      <>
        <button onClick={()=>{handleLikeSubmit()}}>
          Curtir
        </button>
      </>
    );
  };

  export default Curtir
  