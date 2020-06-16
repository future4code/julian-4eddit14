import styled from 'styled-components';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
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
export const LabelComments = styled.label`
    cursor: pointer;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 8px;
`
export const PostList = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #C0C0C0;
`
export const PostContainer = styled.div`
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    margin: 16px 0;
    background-color: white;
    cursor: pointer;

    :hover {
        border: 1px solid black;
    }
`
export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
`
export const UserName = styled.label`
    width: 100%;
    border-bottom: 1px solid #C0C0C0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
`
export const VotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`
export const TextArea = styled.div`
    text-align: center;
    padding: 8px;
`