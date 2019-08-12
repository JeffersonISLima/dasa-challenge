import './search-pokemon.css';
import React, { Component } from "react";

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      control: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { target: { value } } = event;
    const regExpVowels = /[aeiou]/gi;
    const regExp = new RegExp(value, 'gi');
    const pokemonFind = this.props.pokemonsList.filter((pokemon) => {
      if (pokemon.name.match(regExp) || pokemon.name.replace(regExpVowels, '').match(regExp)) {
        return pokemon;
      }
      return null;
    });
    this.setState({
      pokemons: pokemonFind,
      control: true,
    });
  }

  render() {
    return (
      <>
        <div>
          <form className="search-box">
            <div>
              <input className="search-txt" type="search" placeholder="Quem é esse Pokémon?" name="search" onChange={e => this.handleChange(e)} />
              &#128269; {/* Ícone Lupa */}
            </div>
          </form>
        </div>
        <div className="parent-pokemon-card">
          {this.state.control === false
            ? this.props.pokemonsList.map((pokemon, idx) => (
              <p className="pokemon-card" key={idx}> {pokemon.name} </p>
            ))
            : this.state.pokemons.map((pokemon, idx) => (
              <p className="pokemon-card" key={idx}> {pokemon.name} </p>
            ))
          }
        </div>
      </>
    );
  }
}

export default SearchPokemon;
