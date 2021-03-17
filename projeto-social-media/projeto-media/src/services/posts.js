//referente a Api no final de cada url que é a mesma, tem um barra alguma coisa
//na minha api tem /signup.../login .../posts

import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/post`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data.message)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
  }