import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const PostList = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid;
`
export const PostContainer = styled.div`
    border: 1px solid;
    margin: 16px 0;
`
export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
`
export const UserName = styled.label`
    width: 100%;
    border-bottom: 1px solid;
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