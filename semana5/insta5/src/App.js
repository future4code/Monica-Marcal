import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
     Post:[{
    
          nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
    
     }

  ]
}

/*
class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joão'}
          fotoUsuario={'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'}
          fotoPost={'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'}
        />
        <Post
          nomeUsuario={'mariah'}
          fotoUsuario={'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'}
          fotoPost={'https://i.picsum.photos/id/1037/5760/3840.jpg?hmac=fZe213BcO2KPQEJKChsdHnVYg-6kAtQMTZV24f1fS94'}
        />
      </div>
      
    );
  }*/
}

export default App;
