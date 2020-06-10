import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from './Hooks/useForm'
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const PostList = styled.div`
    width: 400px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
`

function FeedPage() {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const { form, onChange } = useForm({
        text: '',
        title: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        onChange(name, value)
    }

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

    const goToPost = () => {
       
    }

    const goToLogin = () => {
        localStorage.clear()
        history.push('/')
    }

    const goToDetails = (id) => {
        history.push(`/post/${id}`)
    }

    const createPost = () => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', form,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                console.log('Create post: ', response.data)
                verLista()
            })
            .catch(err => {
                console.log('Erro em create post: ', err.data)
            })
    }

    return (
        <Container>
            <h2>Feed</h2>

            {/* <button onClick={goToPost}>POST</button> */}
            <form onSubmit={handleSubmit}>
                <input name={'title'} value={form.title} onChange={handleInputChange} type={'text'} placeholder={'Escreva o título do post'} required />
                <textarea name={'text'} value={form.text} onChange={handleInputChange} type={'text'} placeholder={'Escreva seu post'} required />
                <button onClick={createPost}>POSTAR</button>
            </form>
            {
                posts.map(post => {
                    return (<PostList onClick={() => goToDetails(post.id)} key={post.id}>
                        <p>{post.username}</p>
                        <p>{post.text}</p>
                        <div>
                            <p>{post.votesCount}</p>
                            <p>{post.commentsCount} comentários</p>
                        </div>
                    </PostList>)
                })
            }

            <button onClick={goToLogin}>SAIR</button>
        </Container>
    );
}

export default FeedPage;
