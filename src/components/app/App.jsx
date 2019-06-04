import React, { Component } from "react";
import "./app.css";
import "./reset.css";
import SearchPokemon from "../search-pokemon/SearchPokemon";
import Navbar from "../navbar/Navbar";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsList: [],
    };
    this.callPokeApi = this.callPokeApi.bind(this);
  //  this.searchPokemon = this.searchPokemon.bind(this);
  }

  callPokeApi() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      this.setState({
        pokemonsList: response.data.results
      });
    });
  }

/*   searchPokemon(searchValue) {  
    const listPokemon = [...this.state.pokemonsList] 
    const pokemonSearch = listPokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchValue.search.toLowerCase())
    );
    this.setState({
      pokemonsList: pokemonSearch,
    });
  } */

  componentDidMount() {
    this.callPokeApi();    
  }

  render() {    
    return (
      <section className="app-section">       
        <Navbar />
        <SearchPokemon callPokeApi={this.callPokeApi} pokemonsList={this.state.pokemonsList} /> 
      </section>
    );
  }
}

export default App;