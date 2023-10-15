import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../componentes/Header/Header"
import Historicos from "../../componentes/Historicos/Historicos"


const TelaInicial = ({novo, setNovo}) =>{
    

    const pegarTodosPosts =()=>{
                axios.get('http://localhost:3003/post/all')
                .then(response =>{
                    // console.log('esse aqui',response.data)
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
                        </div>
                    )
                })}
                <Historicos/>
                </>
            )

 
}

export default TelaInicial