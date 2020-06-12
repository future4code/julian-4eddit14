import React from 'react';
import { NewCommentContainer } from './StylePost'
import axios from 'axios'
import { useForm } from '../Hooks/useForm'
import { Typography, TextField, Button } from '@material-ui/core'

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
            <TextField
                name={'text'} value={form.text}
                onChange={onChange}
                placeholder={'Escreva seu comentário'}
                variant={'outlined'}
                multiline rows={'4'}
                equired
            />
            <Button onClick={createComment} variant={'contained'} color={'primary'}>COMENTAR</Button>
        </NewCommentContainer>
    )
}

export default NewComment