import { useState, useEffect } from "react"
import axios from "axios"


export const usePostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
            { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(err => { window.alert('Pegar posts falhou') })
    }, [])

    return posts

}