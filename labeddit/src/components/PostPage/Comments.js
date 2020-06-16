import React, { useReducer } from 'react';
import { voteReducer, initialState } from '../Reducers/votes'
import { CommentItem, UserName, VotesCommentContainer, ArrowUp, ArrowDown } from './StylePost'
import axios from 'axios'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function Comments(props) {

    const voteComment = (id, vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.post.id}/comment/${id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            props.getDetails()
        }).catch(err => {
            window.alert('Votar no comentário falhou.')
        })
    }

    return (<div>
        {props.post.comments.map(comment => {
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
                        <label onClick={() => voteComment(comment.id, votePositiveComment)}>
                            <ArrowUp color={iconColorPositiveComment} />
                        </label>
                        <label>{comment.votesCount}</label>
                        <label onClick={() => voteComment(comment.id, voteNegativeComment)}>
                            <ArrowDown color={iconColorNegativeComment} />
                        </label>
                    </VotesCommentContainer>
                </CommentItem>)
        })}
    </div>)
}

export default Comments