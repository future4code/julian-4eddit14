import React from 'react';
import { NewCommentContainer } from './StylePost'
import axios from 'axios'
import { useForm } from '../Hooks/useForm'

function NewComment(props) {
    const { form, onChange, resetValues } = useForm({ text: '' })

    const createComment = (e) => {
        e.preventDefault()

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.post.id}/comment`, form,
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(res => {
                props.getDetails()
                resetValues()
            })
            .catch(err => {
                window.alert('Criar comentário falhou.')
            })
    }

    return (
        <NewCommentContainer onSubmit={createComment}>
            <textarea name={'text'} value={form.text} onChange={onChange} placeholder={'Escreva seu comentário'} rows={'4'} required />
            <button onClick={createComment}>COMENTAR</button>
        </NewCommentContainer>
    )
}

export default NewComment