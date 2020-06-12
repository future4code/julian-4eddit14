import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './StyleFeed'
import axios from 'axios'
import Posts from './Posts';
import NewPost from './NewPost';

function FeedPage() {
    const history = useHistory()
    const [posts, setPosts] = useState([])

    useEffect(() => {

        localStorage.getItem('token') === null && history.push('/')
        verLista()
    }, [])

    const goToLogin = () => {

        localStorage.clear()
        history.push('/')
    }

    const verLista = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(err => {
                console.log(err)
                window.alert('Pegar posts falhou')
            })
    }

    return (
        <Container>
            <h2>Feed</h2>
            <NewPost verLista={verLista} />
            {posts.length === 0 ? ('carregando...') : (
                <Posts postslist={posts} verLista={verLista} />)}
            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default FeedPage;
