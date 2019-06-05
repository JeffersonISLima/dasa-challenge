import React, { Component } from "react";
import './search-pokemon.css';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: "",
      control: false
    };
    this.inputChange = this.inputChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(arrayOfPokemons) {
    this.setState({
      pokemons: arrayOfPokemons,
    });
  }

  componentDidMount() {
    this.props.callPokeApi(this.updateState);
  }

  inputChange(event) {
    event.preventDefault();
    const { value } = event.target;
    const pokemonFind = this.props.pokemonsList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      pokemons: pokemonFind,
      control: true
    });
  }

  render() {
    return (
      <section className="search">
        <div className="parent">
          <form className="search-box">
          <i class="fas fa-search"></i>
            <input
              className="search-txt"
              type="search"
              placeholder="Quem é esse Pokémon?"
              name="search"
              onChange={e => this.inputChange(e)}
            />
           
          </form>
        </div>
          <div>
            {this.state.control === false
              ? this.props.pokemonsList.map((pokemon, idx) => (
                  <p key={idx}> {pokemon.name} </p>
                ))
              : this.state.pokemons.map((pokemon, idx) => (
                  <p key={idx}> {pokemon.name} </p>
                ))}
          </div>        
      </section>
    );
  }
}

export default SearchPokemon;
