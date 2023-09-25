import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

export const useRequestData = (url)=>{

    const [data, setData] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token'); // Recupere o token do local storage
    
        if (!token) {
          console.error("Token not found");
          return;
        }
    
        axios
        .get(url, {
          headers: { 'Authorization': token }
        })
          .then(response => {
            setData(response.data)
          })
          .catch(error => console.error(error));
      }, []);

      return data

}