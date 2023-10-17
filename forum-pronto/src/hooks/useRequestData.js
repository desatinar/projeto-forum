import axios from 'axios'
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/url';
import { useNavigate } from 'react-router-dom';

export const useRequestData = (path)=>{

  const [dados, setDados] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()
console.log(dados)

  useEffect(() => {
      setIsLoading(true)
      const token = localStorage.getItem('token'); // Recupere o token do local storage
  
      if (token) {
        navigate('/home');
      }
  
      axios
      .get(`${BASE_URL}${path}`, {
        headers: { 'Authorization': token }})
      .then(response => {
        setDados(response.data);
        // console.log('aqui',response.data)
        setIsLoading(false)
      })
      // .catch(error => console.error(error));
      .catch((err) => setError(err.response.data.message || true));
    }, [navigate]);

    console.log("dados",dados)

    return [dados, isLoading, error]

}