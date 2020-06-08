import React, { useState } from 'react';
import { useForm } from './Hooks/useForm'
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

    const handleSubmit = e => {
        e.preventDefault()
        createSignup()
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        onChange(name, value)
    }

    const createSignup = () => {
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
            <Form onSubmit={handleSubmit}>
                <input value={form.username} name={'username'} onChange={handleInputChange} type={'text'} placeholder={'Nome do usuário'} required />
                <input value={form.email} name={'email'} onChange={handleInputChange} type={'email'} placeholder={'Email'} required />
                <input value={form.password} name={'password'} onChange={handleInputChange} type={'password'} placeholder={'Senha'} required />
                <button>CADASTRAR</button>
                <button onClick={goToLogin}>VOLTAR</button>
            </Form>
        </Container>
    );
}

export default SignupPage;
