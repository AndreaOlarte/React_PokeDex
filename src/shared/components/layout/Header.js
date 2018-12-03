import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import './Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  };

  render() {
    const {
      title = 'Welcome to React',
      url = 'http://localhost:3000'
    } = this.props;

    return (
      <header className="App-header">
        <nav className="nav-bar">
          <h1 className="left-area">
            <a href={url}>
              <img src={logo} className="App-logo" alt="logo"/>
            </a>
          </h1>
          {/* <nav>
            <ul></ul>
          </nav> */}
          <div className="right-area">
            <form action="">
              <input type="text" title="Search for your Pokemon" placeholder="Search for your Pokemon" />
              <input type="submit" title="Search" class="fas fa-search" value="&#xf002;" />
            </form>          
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;