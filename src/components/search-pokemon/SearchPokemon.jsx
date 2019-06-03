import React, { Component } from 'react';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }

  render(){
    return(
      <section>
        <p>Ola search</p>
        <form>
          <i className="fas fa-search"></i>
          <input type="search" name="search" placeholder="Pesquise um pokemon"    />
        </form>
      </section>
    )
  }
}

export default SearchPokemon;