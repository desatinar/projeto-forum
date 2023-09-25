import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../componentes/Header/Header"
import { useNavigate } from 'react-router-dom';
import loginImagem from '../../assets/imagemLogin.png'
import { ButtonStyle, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from './style';


function Login() {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('home');
        }
    }, [navigate]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = { username, password };

        axios.post('http://localhost:3003/user/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                alert(response.data.message);
                console.log(response.message)
                navigate('home');
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <Header
                titulo={"login"}
            />

            <SectionStyle>
                <ContainerDiv>
                    <h2>We’ve Missed You!</h2>
                    <PStyle>More than 150 questions are waiting for your wise suggestions!</PStyle>

                    <FormStyle onSubmit={handleSubmit}>

                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            value={username}
                            onChange={(e) => setuserName(e.target.value)} />

                        <InputStyle
                            placeholder='Senha'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    </FormStyle>


                </ContainerDiv>
                <ImagemStyle src={loginImagem} alt='' />


            </SectionStyle>

        </>
    )
}

export default Login

