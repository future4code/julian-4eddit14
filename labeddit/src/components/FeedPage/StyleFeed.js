import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
`
export const PostList = styled.div`
    width: 400px;
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

    :hover {
        border: 1px solid black;
    }
`
export const Form = styled.form`
    width: 400px;
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