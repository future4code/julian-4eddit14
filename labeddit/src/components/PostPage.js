import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const PostContainer = styled.div`
    border: 1px solid;
    padding: 8px;
`
const CommentsContainer = styled.div`
    border: 1px solid;
    padding: 8px;
`
const NewComment = styled.div`
    border: 1px solid;
    padding: 8px;
`

function PostPage() {
    const history = useHistory()
    const pathParams = useParams()
    const [post, setPost] = useState({})
    const [inputComment, setInputComment] = useState('')
    let comments

    useEffect(() => {
        localStorage.getItem('token') === null && history.push('/')
        getDetails()
    }, [])

    const getDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                setPost(response.data.post)
                console.log(response.data)
            })
            .catch(err => {
                window.alert('Pegar detalhes falhou')
            })
    }

    const goToPost = () => {
        history.push('/feed')
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
    }

    if (post.comments !== undefined) {
        comments = post.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                    <p>{comment.votesCount}</p>
                </div>)
        })
    }

    const handleInput = (e) => {
        setInputComment(e.target.value)
    }

    const createComment = () => {
        const body = {
            'text': inputComment,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment`, body,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                console.log('createcomment: ', response.data)
                getDetails()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Container>
            <h2>Post</h2>
            <PostContainer>
                <p>{post.username}</p>
                <p>{post.text}</p>
                <div>
                    <p>{post.votesCount}</p>
                    <p>{post.commentsCount} comentários</p>
                </div>
            </PostContainer>
            <NewComment>
                <input value={inputComment} onChange={handleInput} placeholder={'Escreva seu comentário'} />
                <button onClick={createComment}>COMENTAR</button>
            </NewComment>
            <CommentsContainer>
                {comments}
            </CommentsContainer>
            <button onClick={goToPost}>VOLTAR PARA FEED</button>
            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default PostPage;
