import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

function FeedPage() {
    const history = useHistory()

    useEffect(() => {
        localStorage.getItem('token') === null && history.push('/')
    })

    const goToPost = () => {
        history.push('/post')
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
    }

    const post = () => {
        
    }

    return (
        <Container>
            <h2>Feed</h2>
            <input type={'text'} placeholder={'Escreva seu post'} />
            <button onClick={post}>POSTAR</button>
            <button onClick={goToPost}>POST</button>
            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default FeedPage;
