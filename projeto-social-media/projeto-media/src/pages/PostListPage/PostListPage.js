//pagina de lista de posts
//feed da pagina

import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'
import {PostListContainer, AddPostButton} from './styled'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import {Add} from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
import {goToPost , goToAdd} from '../../routes/coordinator'
import Loading from "../../components/Loading/Loading"


const PostListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/labEddit/posts`)
    console.log(posts)

    //para detalhes do  post
    //seguindo o video da chijo ele entra no detalhe da sopa por exemplo
    
    const onClickCard = (id) => {
        goToPost(history, id)
    }
    
    //post && post.post && post.post.propriedade
    const postsCards = posts.map((post) => {
        return (
        <PostCard
        key={post.post_id}
        title={post.title}
        image={post.image}
        onClick={() => onClickCard(post.post_id)}
      />
        )
    })

    return(
        <PostListContainer>
           {postsCards.length > 0 ? postsCards : <Loading />}
           <AddPostButton
           color={"primary"}
           onClick={() =>goToPost(history)}
           >
               <Add />
           </AddPostButton>
        </PostListContainer>
    )
}

export default PostListPage;
