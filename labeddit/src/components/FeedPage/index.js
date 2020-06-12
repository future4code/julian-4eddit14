import React, { useState, useEffect } from 'react';
import { Container } from './StyleFeed'
import axios from 'axios'
import Posts from './Posts';
import NewPost from './NewPost';
import { Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
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
            })
            .catch(err => {
                console.log(err)
                window.alert('Pegar posts falhou')
            })
    }

    return (
        <Container>
            <Typography variant={'h3'}>Feed</Typography>
            <NewPost verLista={verLista} />
            {posts.length === 0 ? ('carregando...') : (
                <Posts postslist={posts} verLista={verLista} />)}
            <Link to={'/'}>
                <Button variant={'outlined'} color={'primary'} onClick={goToLogin}>LOGOUT</Button>
            </Link>
        </Container>
    );
}

export default FeedPage;
