import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const LoginPage = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        const body = {
            email: email,
            password: password,
        }

        try{
            const response = await axios.post(`${baseUrl}/login`, body)

            localStorage.setItem("token", response.data.token);
            history.push("/feed")
        }catch(e)  {
            alert("Erro de Login: verifique o email e password.")
        }
    }

    const goToSignup = () => {
        history.push('/signup')
    }

  return (
    <Container>
        <h2>Login</h2>
        <input type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>ENTRAR</button>
        <button onClick={goToSignup}>CADASTRAR</button>
    </Container>
  );
}

export default LoginPage;
