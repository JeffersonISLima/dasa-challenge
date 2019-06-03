import React, { Component } from 'react';
import './app.css';
import './reset.css'
import SearchPokemon from '../search-pokemon/SearchPokemon'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],     
    }
    this.callPokeApi = this.callPokeApi.bind(this);
  }
  
  callPokeApi() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then( response => {
      this.setState({
        pokemons: response.data['results']
       });  
    });
  }

  componentDidMount() {
    this.callPokeApi();
  }
  
  render() {
    return(
      <section className='app-section'>
          <SearchPokemon />         
          <input placeholder='Encontre um pokemon ' type="search" name="" id="search"/>   
          { this.state.pokemons.map( ( pokemon, idx ) => <p key={idx}> {pokemon.name} {pokemon.url} </p> ) }
      </section>
    );
  }
}

export default App;
