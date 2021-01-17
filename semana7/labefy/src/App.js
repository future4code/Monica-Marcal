import React from "react";
/*
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };

  const DeleteButton = styled.span`
    color:blue;
    cursor: pointer;
  `




  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "monica-marcal-epps"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "monica-marcal-epps"
          }
        }
      )
      .then((res) => {
        this.setState({ playlistValue: "" });
        this.pegarPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletarPlaylists = () => {
    axios
      .del(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId",
        {
          headers: {
            Authorization: "monica-marcal-epps"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };



  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((playlist) => {
    return <p key={playlist.id}>{playlist.name}</p>;
    });

    return (
      <div className="App">
        <div>
         <input
           placeholder="Nome da Playlist"
           value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
        {renderedPlaylists}
        <li>
        <span onclick={() => this.onChangePlaylistValue(playlist.id)}>
        {playlist.name}
        </span>
        <DeleteButton
        onclick={() => this.handlePlaylistDeletion(playlist.id)} 
          >
          X
          </DeleteButton>
        </li>
      </div>
    );
  }  

}
*/


  
export default class App extends React.Components{
  state = {
   
  };

render(){
  return(
    <div className = "App">
    
    </div>
    );
  }
}


