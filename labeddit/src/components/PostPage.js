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

function PostPage() {
    const history = useHistory()

    useEffect(() => {
        localStorage.getItem('token') === null && history.push('/')
    })
    
    const goToPost = () => {
        history.push('/feed')
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <Container>
            <h2>Post</h2>
            <button onClick={goToPost}>VOLTAR PARA FEED</button>
            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default PostPage;
