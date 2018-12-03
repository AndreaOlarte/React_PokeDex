import React, { Component } from 'react'

class PokeCard extends Component{
  render() {
    let picture = this.props.picture;

    return (
      <div className="pokecard">
        <p className="pokename">{this.props.name}</p>
        <img className="media-object" width="64px" src={this.props.picture} />
      </div>
    )
  }
}

export default PokeCard