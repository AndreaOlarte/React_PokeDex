import React, { Component } from 'react';
import logo from './../shared/images/logo.svg';
import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import './App.css';
import PokeList from './PokeList/PokeList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { pokemon: [] }
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        response.json()
      })
      .then((pokemon) => {
        this.setState({ pokemon: pokemon.results})
    })
  }

  render() {
    // if (this.state.pokemon.length > 0) {
      return (
        <div className="container-fluid">
          <PokeList listado={this.state.pokemon} />
        </div>
      )
    // } else {
      // return <p className="text-center">Cargando pokemon...</p>
    // }
  }
}

export default App;
