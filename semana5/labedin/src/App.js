import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardProjetos from './components/CardProjetos/CardProjetos';

import monica from './img/monica.png';
import notebook from './img/notebook.png';
import estudante from './img/estudante.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem={monica} 
          nome="Mônica Marçal" 
          descricao="Olá, eu sou a Mônica. Estudante de desenvolvimento aqui na Labenu. As atividades na Labenu , são desafiadoras. Estou me desenvolvento muito como pessoa e profissional!!!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      <div className="teste">
        <CardPequeno 
        imagem="https://pngimg.com/uploads/email/email_PNG55.png"
        nome="E-mail:monicamarcal93@gmail.com "
        />
         <CardPequeno 
        imagem="https://pngimg.com/uploads/share/share_PNG16.png"
        nome="Endereço: Rua dos Alfeneiros, nº4"
        /> 
      </div>
      </div>

      
          
  

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>


        <CardGrande 
          imagem={notebook} 
          nome="Mônica" 
          descricao="Estudante de desenvolvimento de softaware!" 
        />
        
        <CardGrande 
          imagem={estudante} 
          nome="Estudante Labenu" 
          descricao="Quem sabe tudo, é porque anda muito mal informado - Millôr Fernandes:" 
        /> 
     
      </div>


      <div className="page-section-container">
        <CardProjetos
        imagem={monica}
        nome="Meus Projetos Labenu"
         />
      </div>



      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />

        <ImagemButton
        imagem="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
        texto="LinkedIn"
        />

      </div>
    </div>
  );
}

export default App;
