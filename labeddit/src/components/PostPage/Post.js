import React from 'react';
import { PostContainer, UserName, TextArea } from './StylePost'
import VotesPost from './VotesPost';

function Post(props) {
    return (
        <PostContainer>
            <UserName>{props.post.username}</UserName>
            <TextArea>
                <h4>{props.post.title}</h4>
                <p>{props.post.text}</p>
            </TextArea>
            <VotesPost
                post={props.post}
                getDetails={props.getDetails}
            />
        </PostContainer>
    )
}

export default Post