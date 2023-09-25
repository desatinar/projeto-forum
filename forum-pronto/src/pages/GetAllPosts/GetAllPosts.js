import axios from 'axios'
import React, { useEffect, useState } from 'react';

const GetAllPosts =()=>{

    
    const pegarTodosPosts =()=>{
        axios.get('http://localhost:3003/post/all')
        .then(response =>{
            console.log('esse aqui',response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        pegarTodosPosts()
    }, [])
    return(
        <>
        oi
        </>
    )
}

export default GetAllPosts