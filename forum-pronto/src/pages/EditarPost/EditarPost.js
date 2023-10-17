import { useEffect } from "react";


const EditarPost = () =>{

    const editarPostApi =()=>{

        const token = localStorage.getItem('token'); // Recupere o token do local storage

        if (!token) {
          console.error("Token not found");
          return;
        }

        axios.put(`https://forum-backend-3zv0.onrender.com/post/edit/${id}`, {
            headers: {'Authorization': token}
        })
        .then(response =>{
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        editarPostApi()
    })

    return(

        <>
        Editar
        </>
    )
}

export default EditarPost