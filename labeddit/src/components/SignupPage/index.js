import React from 'react';
import { useForm } from '../Hooks/useForm'
import { useHistory } from 'react-router-dom';
import { Container, Form } from './StyleSignup'
import { Typography, TextField, Button } from '@material-ui/core'
import axios from 'axios'

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
                localStorage.setItem('token', res.data.token)
                window.alert('Cadastro realizado com sucesso')
                history.push('/feed')
            })
            .catch(err => {
                window.alert('Cadastro falhou')
            })
    }

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <Container>
            <Typography variant={'h3'}>Cadastro</Typography>
            <Form onSubmit={createSignup}>
                <TextField
                    label={'Nome do usuário'} type={'text'}
                    value={form.username}
                    name={'username'}
                    onChange={onChange}
                    placeholder={'Nome do usuário'}
                    required
                />
                <TextField
                    label={'Email'} type={'email'}
                    value={form.email}
                    name={'email'}
                    onChange={onChange}
                    placeholder={'Email'}
                    required
                />
                <TextField
                    label={'Senha'} type={'password'}
                    value={form.password}
                    name={'password'}
                    onChange={onChange}
                    placeholder={'Senha'}
                    required
                />
                <Button
                    variant={'contained'}
                    color={'primary'}
                    type={'submit'}>
                    CADASTRAR
                </Button>
            </Form>
            <Button color={'primary'} onClick={goToLogin}>VOLTAR</Button>
        </Container >
    );
}

export default SignupPage;
