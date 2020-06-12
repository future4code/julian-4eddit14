import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const PostContainer = styled.div`
    width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`
export const CommentsContainer = styled.div`
    padding: 8px;
    width: 400px;
`
export const NewCommentContainer = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 16px;
`
export const CommentItem = styled.div`
    width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    margin: 16px 0;
`
export const UserName = styled.label`
    border-bottom: 1px solid;
    padding: 8px;
`
export const VotesContainer = styled.div`
    padding: 8px;
    border-top: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const VotesCommentContainer = styled.div`
    padding: 8px;
    border-top: 1px solid;
    display: flex;
    align-items: center;
`
export const TextArea = styled.div`
    text-align: center;
    padding: 8px;
`