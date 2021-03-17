//Pagina de post
//acho que vou ter mudar essa pagina para detalhes do post como tem na api
//acho que terei que fazer uma outra pagina para postar os post

import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { ScreenContainer, PostImage, PostContainer } from "./styled"
import Typography from '@material-ui/core/Typography'
import Loading from "../../components/Loading/Loading"

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData([], `${BASE_URL}/post/${params.id}`)[0]

    return (
        <ScreenContainer>
            {post ?
                <PostContainer>
                    <PostImage src={post.image} />
                    <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{post.title}</Typography>
                    <Typography align={'center'}>{post.description}</Typography>
                </PostContainer>
            :
                <Loading/>
            }
        </ScreenContainer>
    )
}

export default PostPage