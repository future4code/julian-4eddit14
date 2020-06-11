import React, { useState } from 'react';
import { useForm } from '../Hooks/useForm'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

function SignupPage() {
    const history = useHistory()
    const { form, onChange } = useForm({
        email: '',
        password: '',
        username: ''
    })

    const createSignup = (e) => {
        e.preventDefault()

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`, form)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                history.push('/feed')
            })
            .catch(err => {
                console.log(err)
                window.alert('Cadastro falhou')
            })
    }

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <Container>
            <h2>Cadastro</h2>
            <Form onSubmit={createSignup}>
                <input value={form.username} name={'username'} onChange={onChange} type={'text'} placeholder={'Nome do usuário'} required />
                <input value={form.email} name={'email'} onChange={onChange} type={'email'} placeholder={'Email'} required />
                <input value={form.password} name={'password'} onChange={onChange} type={'password'} placeholder={'Senha'} required />
                <button>CADASTRAR</button>
                <button onClick={goToLogin}>VOLTAR</button>
            </Form>
        </Container>
    );
}

export default SignupPage;
