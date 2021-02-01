/*import React from 'react';
import axios from "axios";
import{baseUrl, axiosConfig} from "../parameters";


export class RegisterPage extends React.Components{
  state = {
    inputName:'',
    inputEmail:''
  }

  handleInputName = (event) => {
    this.setState({inputName: event.target.value})
  }
  handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createUser = () => {
    const body = {
    name:this.state.inputName,
    email: this.state.inputEmail
  }

  axios.post(baseUrl, body, axiosConfig)
  .then((res) => {
    alert("usuario criado com sucesso!")
    ths.setState({inputName: '', inputEmail: ''})
  })
  .catch((err) => {
    alert("erro: usuario não pode ser criado :(")
  })
}

  render(){
    return(
      <div>
      <h2>Cadastro</h2>
      <input placeholder='Nome' value={this.state.inputName} onchange={this.handleInputName} />
      <input placeholder='Email' value={this.state.inputEmail} onchange={this.handleInputEmail} />
      <button onclick={this.createUser}> Cadastrar</button>
      </div>
    )
  }
}
*/
