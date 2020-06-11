import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../Hooks/useForm'
import { Container, PostList, PostContainer, Form, UserName, VotesContainer, TextArea } from './StyleFeed'
import axios from 'axios'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function FeedPage() {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const { form, onChange, resetValues } = useForm({
        text: '',
        title: ''
    })

    const verLista = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                setPosts(response.data.posts)
                console.log('Get Post:', response.data.posts)
            })
            .catch(err => { window.alert('Pegar posts falhou') })
    }

    useEffect(() => {

        localStorage.getItem('token') === null && history.push('/')
        verLista()
    }, [])

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
    }

    const goToDetails = (id) => {
        history.push(`/post/${id}`)
    }

    const createPost = (e) => {
        e.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', form,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                console.log('Create post: ', response.data)
                resetValues()
                verLista()
            })
            .catch(err => {
                console.log('Erro em create post: ', err.data)
            })
    }

    const votePost = (id, vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            console.log('Vote post: ', res.data)
            verLista()
        }).catch(err => {
            console.log('Erro em vote post: ', err)
        })
    }

    return (
        <Container>
            <h2>Feed</h2>
            <Form onSubmit={createPost}>
                <input name={'title'} value={form.title} onChange={onChange} type={'text'} placeholder={'Escreva o título do post'} required />
                <textarea name={'text'} value={form.text} onChange={onChange} type={'text'} placeholder={'Escreva seu post'} rows='5' required />
                <button>POSTAR</button>
            </Form>
            {
                posts.map(post => {
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

                    return (
                        <PostContainer key={post.id}>
                            <PostList onClick={() => goToDetails(post.id)}>
                                <UserName>{post.username}</UserName>
                                <TextArea>
                                    <h4>{post.title}</h4>
                                    <p>{post.text}</p>
                                </TextArea>
                            </PostList>
                            <VotesContainer>
                                <div>
                                    <label onClick={() => votePost(post.id, votePositive)}><ArrowUpward color={iconColorPositive} /></label>
                                    <label>{post.votesCount}</label>
                                    <label onClick={() => votePost(post.id, voteNegative)}><ArrowDownward color={iconColorNegative} /></label>
                                </div>
                                <label>{post.commentsCount} comentários</label>
                            </VotesContainer>
                        </PostContainer>)
                })
            }

            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default FeedPage;
