import React, { Component } from 'react';

class SearchPokemon extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  inputChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value},
    () => this.props.search(this.state))
  }

  render() {
    return(
      <form className="search">
        <input className="input" type="search" placeholder="Quem é esse Pokémon?" name="search" value={this.state.search} onChange={(e) => this.inputChange(e)} />
      </form>
    )
  }
}

export default SearchPokemon;
