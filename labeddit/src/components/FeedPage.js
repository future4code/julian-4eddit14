import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

function FeedPage() {
    const verLista = () => {
        Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', 
        {headers:{'auth': localStorage.getItem('token')}})
        .then(Response => {console.log('Get Post:', Response.data)})
    }

    const history = useHistory()

    useEffect(() => {
        
        localStorage.getItem('token') === null && history.push('/')
        verLista ()
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
