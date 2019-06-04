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
    this.searchPokemon = this.searchPokemon.bind(this);
  }

  callPokeApi() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      this.setState({
        pokemonsList: response.data.results
      });
    });
  }

  searchPokemon(searchValue) {   
    const pokemonSearch = this.state.pokemonsList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchValue.search.toLowerCase())
    );
    this.setState({
      pokemonsList: pokemonSearch,
    });
  }

  componentDidMount() {
    this.callPokeApi();    
  }

  render() {
    console.log(this.state.pokemonsList);
    return (
      <section className="app-section">
        {/* <ListPokemon allPokemons={ this.state.pokemons } /> */}
        <Navbar />
        <SearchPokemon search={this.searchPokemon} />
        {this.state.pokemonsList.map((pokemon, idx) => (
          <p key={idx}> {pokemon.name} </p>
        ))}
      </section>
    );
  }
}

export default App;
