import './App.css';
import React, { useState,useEffect }from  'react';
import axios from 'axios';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
          setPokemon(response.data.results);
        })
        .catch((err) => console.log(err));
      }, []);
      return(
          <div>
            <h1>Pokemon API</h1>
            <ul>{pokemon.map((poke,index)=>{return(
              <li key={index}>{poke.name}</li>)
            })}
            </ul>
          </div>
        );
}
export default Pokemon;
