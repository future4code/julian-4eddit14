import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const PostContainer = styled.div`
    width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`
const CommentsContainer = styled.div`
    padding: 8px;
    width: 400px;
`
const NewComment = styled.div`
    width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    margin: 16px;
`
const CommentItem = styled.div`
    width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    margin: 16px 0;
`
const UserName = styled.label`
    border-bottom: 1px solid;
    padding: 8px;
`
const PostText = styled.label`
    width: 100%;
    padding: 8px;
`
const VotesContainer = styled.div`
    padding: 8px;
    border-top: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const VotesCommentContainer = styled.div`
    padding: 8px;
    border-top: 1px solid;
    display: flex;
    align-items: center;
`
const TextArea = styled.div`
    text-align: center;
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
            .then(res => {
                setPost(res.data.post)
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

    const voteComment = (id, vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/comment/${id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            getDetails()
        }).catch(err => {
            window.alert('Votar no comentário falhou.')
        })
    }

    const handleInput = (e) => {
        setInputComment(e.target.value)
    }

    const createComment = () => {
        const body = {
            'text': inputComment,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/comment`, body,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(res => {
                getDetails()
            })
            .catch(err => {
                window.alert('Criar comentário falhou.')
            })
    }

    const votePost = (vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            getDetails()
        }).catch(err => {
            window.alert('Curtir post falhou.')
        })
    }

    let votePositive, voteNegative, iconColorPositive, iconColorNegative

    if (post.userVoteDirection === 0) {
        votePositive = 1
        voteNegative = -1
    } else if (post.userVoteDirection === 1) {
        votePositive = 0
        voteNegative = -1
        iconColorPositive = 'secondary'
    } else {
        votePositive = 1
        voteNegative = 0
        iconColorNegative = 'secondary'
    }

    if (post.comments !== undefined) {

        comments = post.comments.map(comment => {
            let votePositiveComment, voteNegativeComment, iconColorPositiveComment, iconColorNegativeComment

            if (comment.userVoteDirection === 0) {
                votePositiveComment = 1
                voteNegativeComment = -1
            } else if (comment.userVoteDirection === 1) {
                votePositiveComment = 0
                voteNegativeComment = -1
                iconColorPositiveComment = 'secondary'
            } else {
                votePositiveComment = 1
                voteNegativeComment = 0
                iconColorNegativeComment = 'secondary'
            }
            return (
                <CommentItem key={comment.id}>
                    <UserName>{comment.username}</UserName>
                    <p>{comment.text}</p>
                    <VotesCommentContainer>
                        <label onClick={() => voteComment(comment.id, votePositiveComment)}><ArrowUpward color={iconColorPositiveComment} /></label>
                        <label>{comment.votesCount}</label>
                        <label onClick={() => voteComment(comment.id, voteNegativeComment)}><ArrowDownward color={iconColorNegativeComment} /></label>
                    </VotesCommentContainer>
                </CommentItem>)
        })
    }

    return (
        <Container>
            <h2>Post</h2>
            <PostContainer>
                <UserName>{post.username}</UserName>
                <TextArea>
                    <h4>{post.title}</h4>
                    <p>{post.text}</p>
                </TextArea>
                <VotesContainer>
                    <div>
                        <label onClick={() => votePost(votePositive)}><ArrowUpward color={iconColorPositive} /></label>
                        <label>{post.votesCount}</label>
                        <label onClick={() => votePost(voteNegative)}><ArrowDownward color={iconColorNegative} /></label>
                    </div>
                    <label>{post.commentsCount} comentários</label>
                </VotesContainer>
            </PostContainer>
            <NewComment>
                <textarea value={inputComment} onChange={handleInput} placeholder={'Escreva seu comentário'} rows={'4'} required />
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
