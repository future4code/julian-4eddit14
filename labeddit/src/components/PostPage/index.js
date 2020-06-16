import React, { useState, useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, CommentsContainer } from './StylePost'
import axios from 'axios'
import Comments from './Comments';
import Post from './Post';
import NewComment from './NewComment';
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { Typography, TextField, Button } from '@material-ui/core'

function PostPage() {
    useProtectedPage()
    const pathParams = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        getDetails()
    }, [])

    const goToLogin = () => {
        localStorage.clear()
    }

    const getDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(res => {
                setPost(res.data.post)
            })
            .catch(err => {
                window.alert('Pegar detalhes falhou')
            })
    }

    return (
        <Container>
            <Post post={post} getDetails={getDetails} />
            <NewComment post={post} getDetails={getDetails} />
            <CommentsContainer>
                {post.comments === undefined ? ('carregando...') : (
                    <Comments post={post} getDetails={getDetails} />
                )}
            </CommentsContainer>
            <Link to={'/feed'}>
                <Button>VOLTAR PARA FEED</Button>
            </Link>
            <Link to={'/'}>
                <Button
                    variant={'outlined'}
                    color={'primary'}
                    onClick={goToLogin}>
                    LOGOUT
                </Button>
            </Link >
        </Container>
    );
}

export default PostPage;
