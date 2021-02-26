//não consegui fazer aparecer a imagem de erro 
//tentei varios png 


import React from 'react';
import error from '../../assets/error.png'
import Typography from '@material-ui/core/Typography'
import {ErrorImage, ErrorPageContainer} from './styled'


const ErrorPage = () => {
    return(
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>
                error 404 - page not found </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;