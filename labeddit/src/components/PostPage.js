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

function PostPage() {
    const history = useHistory()

    const goToPost = () => {
        history.push('/feed')
    }

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <Container>
            <h2>Post</h2>
            <button onClick={goToPost}>Voltar para Feed</button>
            <button onClick={goToLogin}>Sair</button>
        </Container>
    );
}

export default PostPage;
