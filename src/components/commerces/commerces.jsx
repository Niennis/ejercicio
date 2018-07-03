import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

// Components
import Header from '../header';
import CommercesItem from './commercesItem';

// Assets
import './commerces.css';

class Commerces extends Component {
  constructor({ title, goto }) {
    super();

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      title: 'Comercios habilitados',
      goto: '/user',
      // show: false,
    };
  }

  // handleClose() {
  //   this.setState({ show: false });
  // }

  // handleShow() {
  //   this.setState({ show: true });
  // }
  
  render() {
    const { title } = this.state;
    const { goto } = this.state;
    
    return (
      <div className="recharge">
        <Header title={title} goto={goto}></Header>
        <div>
          <Row>
            <CommercesItem/>
          </Row>
        </div>
      </div>
    );
  }
}

export default Commerces;