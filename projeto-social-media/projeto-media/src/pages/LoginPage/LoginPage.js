//Pagina de Login


import React from 'react';
import Button from '@material-ui/core/Button';
import {ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer} from './styled'
import logo from '../../assets/logo.png';
import LoginForm from './LoginForm'
import {useHistory} from 'react-router-dom'
import {goToRegister} from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory() 
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
            <Button
                onClick={() => goToRegister(history)}
                type={"submit"}
                fullWidth
                 variant={"text"}
                 color={"primary"}
                 margin={"normal"}
                 >
                      Don't have an account? Register
            </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;