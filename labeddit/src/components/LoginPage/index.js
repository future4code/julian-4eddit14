import React from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useForm } from "../Hooks/useForm";
import { Typography, TextField, Button } from '@material-ui/core'
import { LoginForm } from "./stylesLogin";


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

const LoginPage = () => {
    const history = useHistory()
    const { form, onChange } = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = async (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        try {
            const response = await axios.post(`${baseUrl}/login`, body)
            window.localStorage.setItem('token', response.data.token)
            history.push('/feed')
        } catch (error) {
            window.alert("Erro de Login: verifique o email e password.")
        }
    }

    const goToSignup = () => {
        history.push('/signup')
    }
    return (
        <div>
            <Typography variant="h1" align={'center'} gutterBottom>Login</Typography>
            <LoginForm onSubmit={onSubmitLogin}>
                <TextField
                    label={'Email'} type={'email'}
                    onChange={onChange}
                    value={form['email']} name={'email'}
                />

                <TextField
                    label={'Password'} type={'password'}
                    onChange={onChange}
                    value={form['password']} name={'password'}
                />

                <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
                <div>
                    <label>Não possui cadastro?</label>
                    <Button color={'primary'} type={'submit'} onClick={goToSignup}>Cadastre-se</Button>
                </div>
            </LoginForm>
        </div>
    );
}

export default LoginPage;
