import React, { useState, useEffect, useReducer } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { voteReducer, initialState } from '../Reducers/votes'
import { Container, CommentsContainer } from './StylePost'
import axios from 'axios'
import Comments from './Comments';
import Post from './Post';
import NewComment from './NewComment';
import { Button } from '@material-ui/core';
import { useProtectedPage } from '../Hooks/useProtectedPage';

function PostPage() {
    const history = useHistory()
    const [state, dispatch] = useReducer(voteReducer, initialState)
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
            <h2>Post</h2>
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
            <button onClick={goToLogin}>SAIR</button>
            </Link >
        </Container>
    );
}

export default PostPage;
