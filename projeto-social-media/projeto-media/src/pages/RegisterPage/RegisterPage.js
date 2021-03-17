//Pagina de cadastro


import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import RegisterForm from './RegisterForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const RegisterPage = ({setRightButtonText}) => {
  useUnprotectedPage()
   return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <RegisterForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default RegisterPage