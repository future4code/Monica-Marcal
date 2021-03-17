import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InputsContainer, RegisterFormContainer} from './styled'
import {signUp} from '../../services/login'

const RegisterForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
  
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history,setRightButtonText, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <RegisterFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Name'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Password'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Register</>}
        </Button>
      </RegisterFormContainer>
    </form>
  )
}

export default RegisterForm

          
       