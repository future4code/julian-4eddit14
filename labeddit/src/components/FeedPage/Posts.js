import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { voteReducer, initialState } from '../Reducers/votes'
import { PostList, PostContainer, UserName, VotesContainer, TextArea } from './StyleFeed'
import axios from 'axios'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function Posts(props) {
    const history = useHistory()

    const goToDetails = (id) => {
        history.push(`/post/${id}`)
    }

    const votePost = (id, vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            console.log('Vote post: ', res.data)
            props.verLista()
        }).catch(err => {
            console.log('Erro em vote post: ', err)
        })
    }

    return (
        <div>
            {props.postslist.map(post => {
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
                // aqui(post.userVoteDirection)

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
                                <label onClick={() => votePost(post.id, votePositive)}>
                                    <ArrowUpward color={iconColorPositive} />
                                </label>
                                <label>{post.votesCount}</label>
                                <label onClick={() => votePost(post.id, voteNegative)}>
                                    <ArrowDownward color={iconColorNegative} />
                                </label>
                            </div>
                            <label>{post.commentsCount} comentários</label>
                        </VotesContainer>
                    </PostContainer>)
            })}
        </div>
    )
}

export default Posts