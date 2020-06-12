import React from 'react';
import { useForm } from '../Hooks/useForm'
import { Form } from './StyleFeed'
import axios from 'axios'

function NewPost(props) {
    const { form, onChange, resetValues } = useForm({
        text: '',
        title: ''
    })

    const createPost = (e) => {
        e.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', form,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                console.log('Create post: ', response.data)
                resetValues()
                props.verLista()
            })
            .catch(err => {
                console.log('Erro em create post: ', err.data)
            })
    }

    return (
        <Form onSubmit={createPost}>
            <input
                name={'title'}
                value={form.title}
                onChange={onChange}
                type={'text'}
                placeholder={'Escreva o título do post'}
                required
            />
            <textarea
                name={'text'}
                value={form.text}
                onChange={onChange}
                type={'text'}
                placeholder={'Escreva seu post'}
                rows='5'
                required
            />
            <button>POSTAR</button>
        </Form>
    )
}

export default NewPost