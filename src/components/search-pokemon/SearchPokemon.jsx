import React, { Component } from "react";
import './search-pokemon.css';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: "",
      control: false
    }
    this.searchHandler = this.searchHandler.bind(this);
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

   searchHandler(event) {         
    event.preventDefault();
    const regex = new RegExp(event.target.value, 'g'); 
    const pokemonFind = this.props.pokemonsList.filter((pokemon) => {       
      return pokemon.name.match(regex);
    }); 
    this.setState({
      pokemons: pokemonFind,
      control: true,
    });
  }

  render() {
    return (
      <section>
        <div>
          <form className="search-box"> 
          <div>           
            <input className="search-txt" type="search" placeholder="Quem é esse Pokémon?" name="search" onChange={e => this.searchHandler(e)} /> 
            &#128269; {/* Ícone Lupa */}
          </div>
          </form>
        </div>
          <div className="parent-pokemon-card">
            {this.state.control === false ? this.props.pokemonsList.map((pokemon, idx) => (
              <p className="pokemon-card" key={idx}> {pokemon.name} </p>
            )) : this.state.pokemons.map((pokemon, idx) => (
                    <p className="pokemon-card" key={idx}> {pokemon.name} </p>
                 ))}
          </div>        
      </section>
    );
  }
}

export default SearchPokemon;
