import React, { useState, useEffect} from 'react';
import axios from 'axios';
import cadastroImagem from '../../assets/img-create.png'
import { ButtonStyle, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from './style';
import Header from '../../componentes/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useUserOperations } from '../../hooks/useUserOperations';
// import useUserOperations from '../../hooks/useUserOperations';

function Create() {
    
    // const [message, setMessage] = useState('');

    const navigate = useNavigate()
   
    // const [form, onChangeForm] = useForm({nome:'', password:'', email:''})
    const {form, onChangeForm, handleSubmit} = useUserOperations({username:'', password:'', email:''},'user/signup');
    
    console.log(form)


    return (
        <>

        <Header/>

            <SectionStyle>
                <ContainerDiv>
                    <h2>Join Alem community</h2>
                    <PStyle>Get more features and priviliges by joining to the most helpful community</PStyle>

                    <FormStyle onSubmit={handleSubmit}>

                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='username'
                            value={form.username}
                            onChange={onChangeForm}
                        />

                        <InputStyle
                            placeholder='E-mail'
                            name='email'
                            type="email"
                            value={form.email}
                            onChange={onChangeForm} />

                        <InputStyle
                            placeholder='Senha'
                            name='password'
                            type="password"
                            value={form.password}
                            onChange={onChangeForm} />
                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    </FormStyle>


                </ContainerDiv>
                <ImagemStyle src={cadastroImagem} alt='' />


            </SectionStyle>



        </>
    )
}

export default Create