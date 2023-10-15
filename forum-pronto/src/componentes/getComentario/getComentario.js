import axios from "axios";
import { useEffect, useState } from "react";


function GetComentario({postId}){

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('aqui',comments)
  
    useEffect(() => {
      async function fetchComments() {
        try {
          const response = await axios.get(`/comment/post/${postId}`);
          setComments(response.data);
          setLoading(false);
        } catch (error) {
          setError('Erro ao buscar os comentários');
          setLoading(false);
        }
      }
  
      fetchComments();
    }, [postId]);
  
    if (loading) {
      return <p>Carregando comentários...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <div>
        <h2>Comentários:</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    );
  }

export default GetComentario