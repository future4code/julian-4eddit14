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

function SignupPage() {
    const history = useHistory()

    const goToFeed = () => {
        history.push('/feed')
    }

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <Container>
            <h2>Cadastro</h2>
            <input type={'text'} placeholder={'Nome do usuário'} />
            <input type={'text'} placeholder={'Email'} />
            <input type={'password'} placeholder={'Senha'} />
            <button onClick={goToFeed}>CADASTRAR</button>
            <button onClick={goToLogin}>VOLTAR</button>
        </Container>
    );
}

export default SignupPage;
