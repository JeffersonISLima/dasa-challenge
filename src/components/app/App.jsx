import "./reset.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import React, { Component } from "react";
import SearchPokemon from "../search-pokemon/SearchPokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsList: [],
    };
    this.callPokeApi = this.callPokeApi.bind(this);
  }

  callPokeApi() {
    axios.get(`${process.env.REACT_APP_API_URL}`)
      .then(response => {
        this.setState({
          pokemonsList: response.data.results,
        })
      }).catch(error => console.log(error));
  }

  componentDidMount() {
    this.callPokeApi();
  }

  render() {
    return (
      <section className="app-section">
        <Navbar />
        <SearchPokemon pokemonsList={this.state.pokemonsList} />
      </section>
    );
  }
}

export default App;