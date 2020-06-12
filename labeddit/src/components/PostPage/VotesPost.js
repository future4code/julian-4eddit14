import React from 'react';
import { vote } from '../Reducers/votes'
import { VotesContainer } from './StylePost'
import axios from 'axios'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

function VotesPost(props) {
    // const { votePositive, voteNegative, iconColorPositive, iconColorNegative } = vote()
    let votePositive, voteNegative, iconColorPositive, iconColorNegative

    if (props.post.userVoteDirection === 0) {
        votePositive = 1
        voteNegative = -1
    } else if (props.post.userVoteDirection === 1) {
        votePositive = 0
        voteNegative = -1
        iconColorPositive = 'secondary'
    } else {
        votePositive = 1
        voteNegative = 0
        iconColorNegative = 'secondary'
    }

    const votePost = (vote) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.post.id}/vote`,
            { 'direction': vote },
            { headers: { 'Authorization': localStorage.getItem('token') } }
        ).then(res => {
            props.getDetails()
        }).catch(err => {
            window.alert('Curtir post falhou.')
        })
    }

    // useEffect(() => {
    //     vote(props.post.userVoteDirection)
    // }, [props.post.userVoteDirection])

    return (<div>
        <VotesContainer>
            <div>
                <label onClick={() => votePost(votePositive)}>
                    <ArrowUpward color={iconColorPositive} />
                </label>
                <label>{props.post.votesCount}</label>
                <label onClick={() => votePost(voteNegative)}>
                    <ArrowDownward color={iconColorNegative} />
                </label>
            </div>
            <label>{props.post.commentsCount} comentários</label>
        </VotesContainer>
    </div>)
}

export default VotesPost
