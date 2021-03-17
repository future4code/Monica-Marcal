//referente a Api no final de cada url que é a mesma, tem um barra alguma coisa
//na minha api tem /signup.../login .../posts

import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToPostList} from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/labEddit/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => 
        alert(err.response.data.message))
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post (`${BASE_URL}/labEddit/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => alert (err.response.data.message))
}