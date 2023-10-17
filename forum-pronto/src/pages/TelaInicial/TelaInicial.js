import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../componentes/Header/Header"
import Historicos from "../../componentes/Historicos/Historicos"


const TelaInicial = ({novo, setNovo}) =>{
    
    
    const pegarTodosPosts =()=>{
                axios.get('https://forum-backend-3zv0.onrender.com/post/all')
                .then(response =>{
       
                    setNovo(response.data)
                })
                .catch(error => console.log(error))
            }
        
            useEffect(()=>{
                pegarTodosPosts()
            }, [])
            
            return(
                <>
                <Header/>
                {novo && novo.map((item, index) =>{
                    return(
                        <div key={index}>
                            <p>{item.creator_username}</p>
                            {item.comments.map(coment =>{
                                return(coment.comment)
                            })}
                        </div>
                    )
                })}
                <Historicos/>
                </>
            )

 
}

export default TelaInicial