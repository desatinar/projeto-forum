// hooks/useUserOperations.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from './useForm';
import { BASE_URL } from '../constants/url';

export const useUserOperations = (initialForm,path) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [form, onChangeForm] = useForm(initialForm);

    console.log(form)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
       

        axios.post(`${BASE_URL}${path}`, form)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                setMessage(response.data.message);
                    navigate('/home');
                
            })
            .catch(error => {
                console.log(error);
            });
    };

    return {
        form,
        onChangeForm,
        handleSubmit,
        message
    };
}


