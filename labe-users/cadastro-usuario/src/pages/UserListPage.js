/*import React from 'react';
import axios from 'axios';
import {baseUrl, axiosConfig} from "../parameters";

export class UsersListPage extends React.Components {
  state = {
    users:[]
  }

componentDidMount = () => {
  this.getAllUsers()
}

//sintaxe do async & await
getAllUsers = async () =>{
  try{
    const response = await axios.get(baseUrl, axiosConfig)
    console.log(response.data)
    this.setState({users: response.data})
  }catch(error){
    console.log(error)
  }
}

  deleteUser = (id) => {
  axios.delete(`${baseUrl}/${id}`, axiosConfig)
  .then((res) =>{
    this.getAllUsers()
  })
  .catch((err) => {
    console.log(err)
  })
}

render(){
  render(
    <div>
      <h2>Lista de Ususarios</h2>
      {this.state.users.map((user) =>{
        return(
          <div>
            <p>{user.name}</p>
            <button onclick={() => { this.deleteUser(user.id)}}>X</button>
          </div>
        )
      })}
    </div>
  );
}
}

*/
