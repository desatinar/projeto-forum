import React, { useState } from 'react';
import axios from 'axios';
import cadastroImagem from '../../assets/img-create.png'
import { ButtonStyle, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from './style';
import Header from '../../componentes/Header/Header';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate()
   

    const postCadastroUsuario = (e) => {
        e.preventDefault();

        const body = {  
            email:email, 
            username:username,
            password:password};

        axios.post('http://localhost:3003/user/signup', body)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                setMessage(response.data.message)
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/home')
            })
            .catch(error => console.error(error));
    };

    return (
        <>

        <Header/>

            <SectionStyle>
                <ContainerDiv>
                    <h2>Join Alem community</h2>
                    <PStyle>Get more features and priviliges by joining to the most helpful community</PStyle>

                    <FormStyle onSubmit={postCadastroUsuario}>

                        <InputStyle
                            type="text"
                            value={username}
                            placeholder='Nome'
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <InputStyle
                            placeholder='E-mail'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <InputStyle
                            placeholder='Senha'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    </FormStyle>


                </ContainerDiv>
                <ImagemStyle src={cadastroImagem} alt='' />


            </SectionStyle>



        </>
    )
}

export default Create