import React, { useState, useEffect } from 'react';
import { Container } from './StyleFeed'
import axios from 'axios'
import Posts from './Posts';
import NewPost from './NewPost';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { useProtectedPage } from '../Hooks/useProtectedPage';

function FeedPage() {
    const [posts, setPosts] = useState([])
    useProtectedPage ()


    useEffect(() => {
        verLista()
    }, [])

    const goToLogin = () => {
        localStorage.clear()
    }

    const verLista = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                setPosts(response.data.posts)
                console.log('Get Post:', response.data.posts)
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
            <Posts postslist={posts} verLista={verLista} />
            <Link to={'/'}>
                <Button onclick={goToLogin}>SAIR</Button>
            </Link>
        </Container>
    );
}

export default FeedPage;
