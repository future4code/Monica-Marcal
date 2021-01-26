/*import React, {useState} from 'react';
import React, {useEffect} from 'react';

import React from "react";
import axios from "axios";


const PokeCard = (props) ={
  const [pokemon] = useState ({})
}


useEffect(()=>{
   SetpegaPokemon(pokemon);
})

  
  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}

export default PokeCard;
