import React, { Component } from 'react';
import Card from './card/card.jsx';
import Menu from './menu/menu.jsx';

import './user.css';

class User extends Component {
  render() {
   return(
    <div className="user">
      <Card/>
      <Menu/>
    </div>
   )}
  }
export default User;
