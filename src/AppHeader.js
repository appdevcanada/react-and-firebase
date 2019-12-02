import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './favicon.png'

export default class AppHeader extends Component {

  render() {
    return (
      <div className="App-header">
        <img className="logo ml-4 my-auto" src={logo} alt=""></img>
        <h2 className="mx-auto my-auto title">React-Firebase Listing</h2>
        <nav className="navbar justify-content-end">
          <ul className="nav nav-pills">
            <li><NavLink to="/item" activeClassName="nav-item">+</NavLink></li>
          </ul>
        </nav>
      </div >
    )
  }
}