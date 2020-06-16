import styled from 'styled-components';import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

export const ArrowUp = styled(ArrowUpward)`
    cursor: pointer;
    :hover {
        opacity: 0.3;
    }
`
export const ArrowDown = styled(ArrowDownward)`
    cursor: pointer;
    :hover {
        opacity: 0.3;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    padding: 8px;
`
export const PostContainer = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    background-color: white;
    margin: 16px;
`
export const CommentsContainer = styled.div`
    padding: 8px;
    width: 100%;
    max-width: 400px;
`
export const NewCommentContainer = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin: 16px;
    background-color: white;
    border-radius: 5px;
`
export const CommentItem = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid #C0C0C0;
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    border-radius: 5px;
    background-color: white;
`
export const UserName = styled.label`
    border-bottom: 1px solid #C0C0C0;
    padding: 8px;
`
export const VotesContainer = styled.div`
    padding: 8px;
    border-top: 1px solid #C0C0C0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const VotesCommentContainer = styled.div`
    padding: 8px;
    border-top: 1px solid #C0C0C0;
    display: flex;
    align-items: center;
`
export const TextArea = styled.div`
    text-align: center;
    padding: 8px;
`