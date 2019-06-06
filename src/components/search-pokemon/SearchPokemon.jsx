import React, { Component } from "react";
import './search-pokemon.css';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      control: false
    }
    this.searchHandler = this.searchHandler.bind(this);  
  }

   searchHandler(event) {         
    event.preventDefault();
    const { value } = event.target;    
    const pokemonFind = this.props.pokemonsList.filter((pokemon) => {    
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
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
