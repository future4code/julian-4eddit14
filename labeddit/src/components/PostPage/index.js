import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, CommentsContainer } from './StylePost'
import axios from 'axios'
import Comments from './Comments';
import Post from './Post';
import NewComment from './NewComment';

function PostPage() {
    const history = useHistory()
    const pathParams = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        localStorage.getItem('token') === null && history.push('/')
        getDetails()
    }, [])
    
    const goToPost = () => {
        history.push('/feed')
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
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
            <button onClick={goToPost}>VOLTAR PARA FEED</button>
            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default PostPage;
