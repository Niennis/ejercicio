import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// import card from '../../../img/max_bg.png';

import fincieroWhite from '../../../img/logo-big.png';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="contCard">
        <div className="card">
            <Row>
              <Col xs={4} md={4}>
                <img src={fincieroWhite} alt="logoBig"/>
              </Col>
            </Row>
              <Col xs={12} md={12}>
                <h3>1234 1234 1234 1234</h3>
              </Col>
            <Row>
              <Col xs={4} md={4}>
                <p>12/12</p>
                <h6>Válido hasta</h6>
              </Col>
              <Col xs={8} md={8}>
                <p>1234</p>
                <h6>Código de verificación (CVV)</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button bsStyle="info" className="hideData">Ocultar información</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="money">US$10</h3>
                <small>Saldo disponible</small>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Card;