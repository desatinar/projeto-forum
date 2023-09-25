

const PostUsuario = () =>{

    const pegarPostUsuario = ()=>{

        const token = localStorage.getItem('token'); // Recupere o token do local storage

        if (!token) {
          console.error("Token not found");
          return;
        }

        axios.get(`http://localhost:3003/post/${id}`)
        
    }

    return(

        <>
        oi
        </>
    )
}

export default PostUsuario