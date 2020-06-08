import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

function LoginPage() {
    const history = useHistory()

    const goToFeed = () => {
        history.push('/feed')
    }

    const goToSignup = () => {
        history.push('/signup')
    }

  return (
    <Container>
        <h2>Login</h2>
        <input type={'text'} placeholder={'Email'} />
        <input type={'password'} placeholder={'Senha'} />
        <button onClick={goToFeed}>ENTRAR</button>
        <button onClick={goToSignup}>CADASTRAR</button>
    </Container>
  );
}

export default LoginPage;
