import React, { Component } from 'react'
import PokeCard from '../PokeCard/PokeCard'

class PokeList extends Component{
  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            Array.from(this.props.listado).map((pokemon) => {
              return <PokeCard name={ pokemon.name }
                               picture={ pokemon.url } />
            })
          }
        </ul>
      </div>
    );
  }
}

export default PokeList